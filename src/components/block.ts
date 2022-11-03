import EventBus from "../utils/event-bus";
import HandleBars from "handlebars";
import { v4 as makeUUID } from "uuid";
enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}
abstract class Block<Props extends { events?: {} }> {
  eventBus: () => EventBus;
  _element: HTMLElement;
  _meta: {
    tagName: string;
    props: {};
  };
  props: Props;
  children: { [key: string]: Block<Props> };
  _id: string;

  constructor(tagName = "div", propsAndChildren = {}) {
    const eventBus = new EventBus();
    const { children, props } = this._getChildren(propsAndChildren);
    this._meta = {
      tagName,
      props,
    };
    this._id = makeUUID();
    this.children = children;
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  compile(template: string, props: {}): HTMLMetaElement {
    const propsAndStubs: any = { ...props };
    Object.entries(this.children).forEach((el: any) => {
      propsAndStubs[el[0]] = `<div data-id="${el[1]._id}"></div>`;
    });

    const fragment = this._createDocumentElement("template");
    const temp = HandleBars.compile(template);
    fragment.innerHTML = temp(propsAndStubs);
    const content = fragment.content as any;
    Object.values(this.children).forEach((child) => {
      const stub = content.querySelector(`[data-id="${child._id}"]`);
      stub?.replaceWith(child.getContent());
    });

    return content;
  }
  _createResources() {
    const tagName = this._meta.tagName;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();

    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    return oldProps !== newProps;
  }

  setProps = (nextProps: {}) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block: HTMLMetaElement = this.render();
    this._removeEvents();
    this._element.innerHTML = "";
    this._element.appendChild(block);
    this._addEvents();
  }
  _addEvents() {
    const events: { [key: string]: () => {} } = this.props.events || {};
    Object.keys(events).forEach((eventName) => {
      this._element.children[0]?.addEventListener(eventName, events[eventName]);
    });
  }
  _removeEvents() {
    const events: { [key: string]: () => {} } = this.props.events || {};
    Object.keys(events).forEach((eventName) =>
      this._element.children[0]?.removeEventListener(
        eventName,
        events[eventName]
      )
    );
  }
  _getChildren(propsAndChildren: {}) {
    const children: { [key: string]: Block<Props> } = {};
    const props: { [key: string]: any } = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  render(): HTMLMetaElement {
    return new HTMLMetaElement();
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: {}) {
    const self = this;
    return new Proxy(props, {
      get(target: any, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: any, prop, value) {
        target[prop] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  _createDocumentElement(tagName: string): HTMLMetaElement {
    const element = document.createElement(tagName) as HTMLMetaElement;
    element.setAttribute("data-id", this._id);
    return element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
export default Block;

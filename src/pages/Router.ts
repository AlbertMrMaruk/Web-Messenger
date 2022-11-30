import isEqualStr from "../utils/isEqualStr";
import { render } from "../utils/renderDOM";
import Block from "../components/block";

type Params = { rootQuery: string };

class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _params: Params;
  _block: Block<{}> | null;
  constructor(pathname: string, view: typeof Block, params: Params) {
    this._pathname = pathname;
    this._blockClass = view;
    this._params = params;
    this._block = null;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqualStr(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      this._block = new this._blockClass();
      render(this._params.rootQuery, this._block);
    }
    this._block?.show();
  }
}

export default class Router {
  __instance: this;
  _currentRoute: null | Route;
  _rootQuery: string;
  history: History;
  routes: Route[];
  constructor(queryClass: string) {
    if (this.__instance) {
      return this.__instance;
    }

    this._currentRoute = null;
    this._rootQuery = queryClass;
    this.history = window.history;
    this.routes = [];
    this.__instance = this;
  }

  use(pathname: string, view: any) {
    if (typeof pathname !== "string") {
      throw new Error("Pathname should be string");
    }
    const route = new Route(pathname, view, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = (e: Event) => {
      const wind = e.currentTarget as Window;
      this._onRoute(wind.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route: Route | null = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route?.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string): Route | null {
    if (pathname.startsWith("/chats/")) {
      pathname = "/chats/";
    }
    return this.routes.find((route) => route.match(pathname)) ?? null;
  }
}

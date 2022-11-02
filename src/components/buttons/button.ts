import Block from "../block";
import button from "./button.tmpl";

export default class Button extends Block {
  constructor(props: {}) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(button, this.props);
  }
}

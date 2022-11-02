import field from "./fields.tmpl";
import Block from "../Block";

export default class Field extends Block {
  constructor(props: {}) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(field, this.props);
  }
}

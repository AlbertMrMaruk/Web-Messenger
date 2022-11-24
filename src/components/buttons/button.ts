import Block from "../block";
import button from "./button.tmpl";

type ButtonType = {
  name?: string;
  wrapperClass?: string;
  innerClass?: string;
  text?: string;
  events?: {};
};

export default class Button extends Block<ButtonType> {
  constructor(props: ButtonType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(button, this.props);
  }
}

import Block from "../block";
import button from "./button.tmpl";

type buttonType = {
  name?: string;
  wrapperClass?: string;
  innerClass?: string;
  text?: string;
  events?: {};
};

export default class Button extends Block<buttonType> {
  constructor(props: buttonType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(button, this.props);
  }
}

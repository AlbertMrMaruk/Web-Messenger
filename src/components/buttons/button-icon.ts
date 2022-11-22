import Block from "../block";
import buttonIcon from "./button-icon.tmpl";

type ButtonIconType = {
  wrapperClass?: string;
  innerClass?: string;
  link?: string;
  events?: {};
};

export default class ButtonIcon extends Block<ButtonIconType> {
  constructor(props: ButtonIconType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(buttonIcon, this.props);
  }
}

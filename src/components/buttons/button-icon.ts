import Block from "../block";
import buttonIcon from "./button-icon.tmpl";

type buttonIconType = {
  wrapperClass?: string;
  innerClass?: string;
  link?: string;
  events?: {};
};

export default class ButtonIcon extends Block<buttonIconType> {
  constructor(props: buttonIconType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(buttonIcon, this.props);
  }
}

import Block from "../block";
import Button from "../buttons/button";
import ButtonIcon from "../buttons/button-icon";
import modal from "./modal.tmpl";

type modalType = {
  modalOff?: boolean;
  class?: string;
  header?: string;
  buttonIcon?: ButtonIcon;
  submit?: Button;
  type?: string;
  inputSearch?: boolean;
  events?: {};
};

export default class Modal extends Block<modalType> {
  constructor(props: modalType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(modal, this.props);
  }
}

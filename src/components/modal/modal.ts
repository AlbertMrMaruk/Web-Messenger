import Block from "../block";
import Button from "../buttons/button";
import ButtonIcon from "../buttons/button-icon";
import modal from "./modal.tmpl";

type ModalType = {
  modalOff?: boolean;
  class?: string;
  header?: string;
  buttonIcon?: ButtonIcon;
  submit?: Button;
  avatarModal?: string;
  wrapperClass?: string;
  inputText?: string;
  type?: string;
  inputSearch?: boolean;
  events?: {};
};

export default class Modal extends Block<ModalType> {
  constructor(props: ModalType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(modal, this.props);
  }
}

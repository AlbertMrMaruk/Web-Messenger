import Block from "../block";
import message from "./message.tmpl";

type MessageType = {
  class?: string;
  type?: string;
  outerClass?: string;
  text?: string;
  events?: {};
};

export default class Message extends Block<MessageType> {
  constructor(props: MessageType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(message, this.props);
  }
}

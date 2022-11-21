import Block from "../block";
import message from "./message.tmpl";

type messageType = {
  class?: string;
  type?: string;
  outerClass?: string;
  text?: string;
  events?: {};
};

export default class Message extends Block<messageType> {
  constructor(props: messageType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(message, this.props);
  }
}

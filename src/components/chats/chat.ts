import Block from "../block";
import chat from "./chat.tmpl";

type chatType = {
  chatName?: string;
  sender?: string;
  time?: string;
  message?: string;
  events?: {};
};

export default class Chat extends Block<chatType> {
  constructor(props: chatType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(chat, this.props);
  }
}

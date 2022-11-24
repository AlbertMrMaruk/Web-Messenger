import Block from "../block";
import chat from "./chat.tmpl";

type ChatType = {
  chatName?: string;
  avatar?: string;
  sender?: string;
  time?: string;
  message?: string;
  link?: string;
  events?: {};
  id?: string;
  index?: string | number;
};

export default class Chat extends Block<ChatType> {
  constructor(props: ChatType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(chat, this.props);
  }
}

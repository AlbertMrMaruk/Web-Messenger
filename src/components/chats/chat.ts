import Block from "../Block";
import chat from "./chat.tmpl";

export default class Chat extends Block {
  constructor(props: {}) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(chat, this.props);
  }
}

import Block from "../block";
import avatar from "./avatar.tmpl";

type avatarType = {
  src?: string;
  class?: string;
  events?: {};
};

export default class Avatar extends Block<avatarType> {
  constructor(props: avatarType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(avatar, this.props);
  }
}

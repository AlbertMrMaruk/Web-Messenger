import Block from "../block";
import avatar from "./avatar.tmpl";

type AvatarType = {
  src?: string;
  class?: string;
  events?: {};
};

export default class Avatar extends Block<AvatarType> {
  constructor(props: AvatarType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(avatar, this.props);
  }
}

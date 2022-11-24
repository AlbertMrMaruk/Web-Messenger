import Block from "../block";
import link from "./link.tmpl";

type LinkType = {
  link?: string;
  class?: string;
  text?: string;
  events?: {};
};

export default class Link extends Block<LinkType> {
  constructor(props: LinkType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(link, this.props);
  }
}

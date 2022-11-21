import Block from "../block";
import link from "./link.tmpl";

type linkType = {
  link?: string;
  class?: string;
  text?: string;
  events?: {};
};

export default class Link extends Block<linkType> {
  constructor(props: linkType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(link, this.props);
  }
}

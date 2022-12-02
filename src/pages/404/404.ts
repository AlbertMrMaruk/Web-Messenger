import tmpl from "./404.tmpl";
import Block from "../../components/block";

class FourP extends Block<{}> {
  constructor() {
    super("div");
  }
  render(): HTMLMetaElement {
    return this.compile(tmpl, this.props);
  }
}

export default FourP;

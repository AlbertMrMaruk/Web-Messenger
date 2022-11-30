import tmp500 from "./500.tmpl";
import Block from "../../components/block";

class FiveP extends Block<{}> {
  constructor() {
    super("div");
  }
  render(): HTMLMetaElement {
    return this.compile(tmp500, this.props);
  }
}

export default FiveP;

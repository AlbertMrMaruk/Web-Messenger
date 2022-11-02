import home from "./home.tmpl";
import Block from "../../components/block";
import { render } from "../../utils/renderDOM";

class HomeP extends Block {
  constructor(props: {}) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    return this.compile(home, this.props);
  }
}

const homeTemp = new HomeP({
  wrapperClass: "home-wrapper",
});
render("#root", homeTemp);

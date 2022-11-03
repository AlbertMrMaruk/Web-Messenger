import home from "./home.tmpl";
import Block from "../../components/block";
import { render } from "../../utils/renderDOM";

type homeType = {
  wrapperClass?: string;
  events?: {};
};

class HomeP extends Block<homeType> {
  constructor(props: homeType) {
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

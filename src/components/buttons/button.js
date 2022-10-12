import Handlebars from "handlebars";
import { button } from "./button.tmpl";
class Button {
  constructor() {
    this.render();
  }
  render() {
    Handlebars.registerPartial("myBtn", button);
    return;
  }
}
const newBtn = new Button();
export default newBtn;

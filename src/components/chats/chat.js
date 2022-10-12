import Handlebars from "handlebars";
import { chat } from "./chat.tmpl";
class Chat {
  constructor() {
    this.render();
  }
  render() {
    Handlebars.registerPartial("myChat", chat);
    return;
  }
}
const newChat = new Chat();
export default newChat;

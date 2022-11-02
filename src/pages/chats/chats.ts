import chats from "./chats.tmpl";
import { render } from "../../utils/renderDOM";
import Block from "../../components/Block";
import Chat from "../../components/chats/chat";
import Field from "../../components/fields/fields";
import checkField from "../../utils/checkField";

class ChatP extends Block {
  constructor(props: {}) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(chats, this.props);
    resEl.querySelector("form")?.addEventListener("submit", (e: any) => {
      e.preventDefault();
      const inputs = e.target.querySelectorAll(".field-input");
      const formData = [...inputs].reduce((res: any, el: HTMLInputElement) => {
        checkField(el);
        res[el.name] = el.value;
        return res;
      }, {});

      console.log(formData);
    });
    return resEl;
  }
}
const chatTemp = new ChatP({
  chat1: new Chat({
    chatName: "Аркадий",
    time: "18:24",
    message: "Пока",
    sender: "Вы:",
  }),
  chat2: new Chat({
    chatName: "Андрей",
    time: "08:24",
    message: "Привет",
    sender: "",
  }),
  field1: new Field({
    type: "text",
    placeholder: "Сообщение",
    labelDisable: "disable",
    name: "message",
    inputClasses: "message-section-form-input",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
});

render("#root", chatTemp);

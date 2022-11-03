import tmp from "./auth.tmpl";
import { render } from "../../utils/renderDOM";
import Block from "../../components/block";
import Field from "../../components/fields/fields";
import Button from "../../components/buttons/button";
import checkField from "../../utils/checkField";
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";

type loginType = {
  wrapperClass?: string;
  method?: string;
  field1?: Field;
  field2?: Field;
  events?: {};
  btnContext?: Button;
  link?: string;
  linkText?: string;
};

class loginP extends Block<loginType> {
  constructor(props: loginType) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(tmp, this.props);
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
const loginTemp = new loginP({
  wrapperClass: "login-wrapper",
  method: "Вход",
  field1: new Field({
    label: "Логин",
    input1: new Input({
      events: blurFocusEvents,
      name: "login",
      type: "text",
    }),
    text: "Неправильный логин",
  }),
  field2: new Field({
    label: "Пароль",
    input1: new Input({
      events: blurFocusEvents,
      name: "password",
      type: "password",
    }),
    text: "Неправильный пароль",
  }),
  btnContext: new Button({
    text: "Войти",
    wrapperClass: "btn btn-secondary",
  }),
  link: "/signup.html",
  linkText: "Нет аккаунта?",
});

render("#root", loginTemp);

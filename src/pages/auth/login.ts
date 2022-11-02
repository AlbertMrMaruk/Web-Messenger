import tmp from "./auth.tmpl";
import { render } from "../../utils/renderDOM";
import Block from "../../components/block";
import Field from "../../components/fields/fields";
import Button from "../../components/buttons/button";
import checkField from "../../utils/checkField";

class loginP extends Block {
  constructor(props: {}) {
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
    name: "login",
    type: "text",
    text: "Неправильный логин",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field2: new Field({
    label: "Пароль",
    name: "password",
    type: "password",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
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

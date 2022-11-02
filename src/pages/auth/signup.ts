import tmp from "./auth.tmpl";
import { render } from "../../utils/renderDOM";
import Block from "../../components/block";
import Field from "../../components/fields/fields";
import Button from "../../components/buttons/button";
import checkField from "../../utils/checkField";

class SignupP extends Block {
  constructor(props: {}) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    const res = this.compile(tmp, this.props);
    res.querySelector("form")?.addEventListener("submit", (e: any) => {
      e.preventDefault();
      const inputs = e.target.querySelectorAll(".field-input");
      const formData = [...inputs].reduce((res: any, el: HTMLInputElement) => {
        checkField(el);
        res[el.name] = el.value;
        return res;
      }, {});

      console.log(formData);
    });

    return res;
  }
}
const signupTemp = new SignupP({
  wrapperClass: "signup-wrapper",
  method: "Регистрация",
  field1: new Field({
    label: "Почта",
    name: "email",
    type: "text",
    text: "Неправильная почта",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field2: new Field({
    label: "Логин",
    name: "login",
    type: "text",
    text: "Неправильный логин или логин занят",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field3: new Field({
    label: "Имя",
    name: "first_name",
    type: "text",
    text: "Имя может содержать только буквы латиницы или кириллицы и должен начинаться с заглавной буквы",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field4: new Field({
    label: "Фамилия",
    name: "second_name",
    type: "text",
    text: "Фамилия может содержать только буквы латиницы или кириллицы и должна начинаться с заглавной буквы",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field5: new Field({
    label: "Телефон",
    name: "phone",
    type: "phone",
    text: "Неправильный номер телефона",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field6: new Field({
    label: "Пароль",
    name: "password",
    type: "password",
    text: "Пароль должен содержать одну цифру и одну заглавную букву и от 8 символов до 40",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field7: new Field({
    label: "Пароль еще раз",
    type: "password",
    name: "password_confirm",
    text: "Пароли не сходятся",
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  btnContext: new Button({
    text: "Создать аккаунт",
    wrapperClass: "btn btn-secondary ",
  }),
  link: "/login.html",
  linkText: "Есть аккаунт? Войти",
});

render("#root", signupTemp);

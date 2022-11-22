import tmp from "./auth.tmpl";
import Block from "../../components/block";
import Field from "../../components/fields/fields";
import Button from "../../components/buttons/button";
import checkField from "../../utils/checkField";
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";
import connect from "../../api/connect-block";
import UserController from "../../api/controlers/UserController";
import RouterManager from "../home/home";
import Link from "../../components/links/link";

type SignupType = {
  wrapperClass?: string;
  method?: string;
  field1?: Field;
  field2?: Field;
  field3?: Field;
  field4?: Field;
  field5?: Field;
  field6?: Field;
  field7?: Field;
  events?: {};
  btnContext?: Button;
  link?: Link;
  linkText?: string;
};

const propsSingup: SignupType = {
  wrapperClass: "signup-wrapper",
  method: "Регистрация",
  field1: new Field({
    label: "Почта",
    input1: new Input({
      events: blurFocusEvents,
      name: "email",
      type: "text",
    }),
    text: "Неправильная почта",
  }),
  field2: new Field({
    label: "Логин",
    input1: new Input({
      events: blurFocusEvents,
      name: "login",
      type: "text",
    }),
    text: "Неправильный логин или логин занят",
  }),
  field3: new Field({
    label: "Имя",
    input1: new Input({
      events: blurFocusEvents,
      name: "first_name",
      type: "text",
    }),
    text: "Имя может содержать только буквы латиницы или кириллицы и должен начинаться с заглавной буквы",
  }),
  field4: new Field({
    label: "Фамилия",
    input1: new Input({
      events: blurFocusEvents,
      name: "second_name",
      type: "text",
    }),
    text: "Фамилия может содержать только буквы латиницы или кириллицы и должна начинаться с заглавной буквы",
  }),
  field5: new Field({
    label: "Телефон",
    input1: new Input({
      events: blurFocusEvents,
      name: "phone",
      type: "phone",
    }),
    text: "Неправильный номер телефона",
  }),
  field6: new Field({
    label: "Пароль",
    input1: new Input({
      events: blurFocusEvents,
      name: "password",
      type: "password",
    }),
    text: "Пароль должен содержать одну цифру и одну заглавную букву и от 8 символов до 40",
  }),
  field7: new Field({
    label: "Пароль еще раз",
    input1: new Input({
      events: blurFocusEvents,
      type: "password",
      name: "password_confirm",
    }),
    text: "Пароли не сходятся",
  }),
  btnContext: new Button({
    text: "Создать аккаунт",
    wrapperClass: "btn btn-secondary ",
  }),
  link: new Link({
    class: "link-auth",
    text: "Есть аккаунт? Войти",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        RouterManager.go("/login");
      },
    },
  }),
};

class SignupP extends Block<SignupType> {
  constructor() {
    super("div", propsSingup);
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
      signUp(formData);
      console.log(formData);
    });
    return res;
  }
}

async function signUp(formData: any) {
  await UserController.createUser({
    data: JSON.stringify(formData),
  });
  UserController.getUser();
  RouterManager.go("/chats");
}

const withUser = connect((state) => ({ user: state.user }));
const SignupPC = withUser(SignupP);

export default SignupPC;

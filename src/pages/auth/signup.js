import { tmp } from "./auth.tmpl";
import Handlebars from "handlebars";
import { newBtn } from "../../components/buttons";
import { newField } from "../../components/fields";
const template = Handlebars.compile(tmp);
const block2 = template({
  wrapperClass: "signup-wrapper",
  method: "Регистрация",
  inputs: [
    { label: "Почта", name: "email", type: "text" },
    { label: "Логин", name: "login", type: "text" },
    { label: "Имя", name: "first_name", type: "text" },
    { label: "Фамилия", name: "second_name", type: "text" },
    { label: "Телефон", name: "phone", type: "phone" },
    { label: "Пароль", name: "password", type: "password" },
    { label: "Пароль еще раз", type: "password" },
  ],
  btnContext: {
    text: "Создать аккаунт",
    wrapperClass: "btn btn-secondary ",
  },
  link: "/login.html",
  linkText: "Есть аккаунт? Войти",
});
const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", block2);

import { tmp } from "./auth.tmpl";
import Handlebars from "handlebars";
import { newBtn } from "../../components/buttons";
import { newField } from "../../components/fields";
const template = Handlebars.compile(tmp);
const block = template({
  wrapperClass: "login-wrapper",
  method: "Вход",
  inputs: [
    { label: "Логин", name: "login", type: "text" },
    { label: "Пароль", name: "password", type: "password" },
  ],
  btnContext: {
    text: "Войти",
    wrapperClass: "btn btn-secondary",
  },
  link: "/signup.html",
  linkText: "Нет аккаунта?",
});
const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", block);

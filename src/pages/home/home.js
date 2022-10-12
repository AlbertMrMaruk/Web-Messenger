import { home } from "./home.tmpl";
import Handlebars from "handlebars";
import { newBtn } from "../../components/buttons";
const template = Handlebars.compile(home);
const block2 = template({
  wrapperClass: "home-wrapper",
  btnContext: {
    text: "Войти",
    wrapperClass: "btn btn-secondary",
    link: "/login.html",
  },
  btnContext2: {
    text: "Создать аккаунт",
    wrapperClass: "btn btn-primary",
    link: "/signup.html",
  },
});
const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", block2);

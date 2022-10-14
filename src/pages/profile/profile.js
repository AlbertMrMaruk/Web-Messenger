import { profile } from "./profile.tmpl";
import Handlebars from "handlebars";
import { newBtn } from "../../components/buttons";
import { newFieldSettings } from "../../components/fields";

const template = Handlebars.compile(profile);
const block = template({
  name: "Андрей",
  fields: [
    {
      label: "Почта",
      name: "email",
      type: "text",
      value: "em@mail.ru",
      disabled: true,
    },
    {
      label: "Логин",
      name: "login",
      type: "text",
      value: "ecm21",
      disabled: true,
    },
    {
      label: "Имя",
      name: "first_name",
      type: "text",
      value: "Андрей",
      disabled: true,
    },
    {
      label: "Фамилия",
      name: "second_name",
      type: "text",
      value: "Иванов",
      disabled: true,
    },
    {
      label: "Имя в чате",
      name: "display_name",
      type: "text",
      value: "Андрей",
      disabled: true,
    },
    {
      label: "Телефон",
      name: "phone",
      type: "text",
      value: "+7(925)377-77-77",
      disabled: true,
    },
  ],
  buttonContext: {
    link: "/",
    text: "",
    wrapperClass: "btn btn-secondary btn-circle btn-circle-profile",
  },
});

const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", block);

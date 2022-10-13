import { profileChange } from "./profile-change.tmpl";
import Handlebars from "handlebars";
import { newBtn } from "../../components/buttons";
import { newFieldSettings } from "../../components/fields";

const template = Handlebars.compile(profileChange);
const block = template({
  name: "Андрей",
  fields: [
    {
      label: "Почта",
      name: "email",
      type: "text",
      value: "em@mail.ru",
      disabled: false,
    },
    {
      label: "Логин",
      name: "login",
      type: "text",
      value: "ecm21",
      disabled: false,
    },
    {
      label: "Имя",
      name: "first_name",
      type: "text",
      value: "Андрей",
      disabled: false,
    },
    {
      label: "Фамилия",
      name: "second_name",
      type: "text",
      value: "Иванов",
      disabled: false,
    },
    {
      label: "Имя в чате",
      name: "display_name",
      type: "text",
      value: "Андрей",
      disabled: false,
    },
    {
      label: "Телефон",
      name: "phone",
      type: "text",
      value: "+7(925)377-77-77",
      disabled: false,
    },
  ],
  btnContext: {
    text: "Сохранить",
    wrapperClass: "btn btn-secondary",
  },
  buttonContext: {
    link: "/",
    text: "",
    wrapperClass: "btn btn-secondary btn-circle btn-circle-profile",
  },
});

const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", block);

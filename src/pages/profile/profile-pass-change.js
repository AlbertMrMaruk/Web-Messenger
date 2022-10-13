import { profilePassChange } from "./profile-pass-change.tmpl";
import Handlebars from "handlebars";
import { newBtn } from "../../components/buttons";
import { newFieldSettings } from "../../components/fields";

const template = Handlebars.compile(profilePassChange);
const block = template({
  name: "Андрей",
  fields: [
    {
      label: "Старый пароль",
      name: "oldPassword",
      type: "password",
      value: "",
      disabled: false,
    },
    {
      label: "Пароль",
      name: "newPassword",
      type: "password",
      value: "",
      disabled: false,
    },
    {
      label: "Подтвердить пароль",
      name: "confirmPassword",
      type: "password",
      value: "",
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

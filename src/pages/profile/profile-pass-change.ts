import profilePassChange from "./profile-pass-change.tmpl";
import Button from "../../components/buttons/button";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import { render } from "../../utils/renderDOM";
import checkField from "../../utils/checkField";
checkField;

class ProfilePassChangeP extends Block {
  constructor(props: {}) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(profilePassChange, this.props);
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

const profileTemp = new ProfilePassChangeP({
  name: "Андрей",
  field1: new FieldSettings({
    label: "Старый пароль",
    name: "oldPassword",
    type: "password",
    value: "",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field2: new FieldSettings({
    label: "Пароль",
    name: "newPassword",
    type: "password",
    value: "",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field3: new FieldSettings({
    label: "Подтвердить пароль",
    name: "password_confirm",
    type: "password",
    value: "",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  btnContext: new Button({
    text: "Сохранить",
    wrapperClass: "btn btn-secondary",
  }),
});
render("#root", profileTemp);

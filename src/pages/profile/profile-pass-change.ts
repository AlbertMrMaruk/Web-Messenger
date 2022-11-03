import profilePassChange from "./profile-pass-change.tmpl";
import Button from "../../components/buttons/button";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import { render } from "../../utils/renderDOM";
import checkField from "../../utils/checkField";
checkField;
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";

type profilePassChangeType = {
  name?: string;
  field1?: FieldSettings;
  field2?: FieldSettings;
  field3?: FieldSettings;
  events?: {};
  btnContext?: Button;
};

class ProfilePassChangeP extends Block<profilePassChangeType> {
  constructor(props: profilePassChangeType) {
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
    input1: new Input({
      name: "oldPassword",
      type: "password",
      value: "",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field2: new FieldSettings({
    label: "Пароль",
    input1: new Input({
      name: "newPassword",
      type: "password",
      value: "",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field3: new FieldSettings({
    label: "Подтвердить пароль",
    input1: new Input({
      name: "password_confirm",
      type: "password",
      value: "",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  btnContext: new Button({
    text: "Сохранить",
    wrapperClass: "btn btn-secondary",
  }),
});
render("#root", profileTemp);

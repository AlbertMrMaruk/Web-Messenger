import profileChange from "./profile-change.tmpl";
import Button from "../../components/buttons/button";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import { render } from "../../utils/renderDOM";
import checkField from "../../utils/checkField";

class ProfileChangeP extends Block {
  constructor(props: {}) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(profileChange, this.props);
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

const profileTemp = new ProfileChangeP({
  name: "Андрей",
  field1: new FieldSettings({
    label: "Почта",
    name: "email",
    type: "text",
    value: "em@mail.ru",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field2: new FieldSettings({
    label: "Логин",
    name: "login",
    type: "text",
    value: "ecm21",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field3: new FieldSettings({
    label: "Имя",
    name: "first_name",
    type: "text",
    value: "Андрей",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field4: new FieldSettings({
    label: "Фамилия",
    name: "second_name",
    type: "text",
    value: "Иванов",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field5: new FieldSettings({
    label: "Имя в чате",
    name: "display_name",
    type: "text",
    value: "Андрей",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  field6: new FieldSettings({
    label: "Телефон",
    name: "phone",
    type: "text",
    value: "+79253777777",
    disabled: false,
    events: {
      focus: (e: any) => checkField(e.target),
      blur: (e: any) => checkField(e.target),
    },
  }),
  fields: [],
  btnContext: new Button({
    text: "Сохранить",
    wrapperClass: "btn btn-secondary",
  }),
});
render("#root", profileTemp);

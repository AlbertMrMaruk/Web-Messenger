import profileChange from "./profile-change.tmpl";
import Button from "../../components/buttons/button";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import { render } from "../../utils/renderDOM";
import checkField from "../../utils/checkField";
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";

type profileChangeType = {
  name?: string;
  field1?: FieldSettings;
  field2?: FieldSettings;
  field3?: FieldSettings;
  field4?: FieldSettings;
  field5?: FieldSettings;
  field6?: FieldSettings;
  field7?: FieldSettings;
  events?: {};
  btnContext?: Button;
};

class ProfileChangeP extends Block<profileChangeType> {
  constructor(props: profileChangeType) {
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
    input1: new Input({
      events: blurFocusEvents,
      name: "email",
      type: "text",
      value: "em@mail.ru",
      disabled: false,
    }),
  }),
  field2: new FieldSettings({
    label: "Логин",
    input1: new Input({
      events: blurFocusEvents,
      name: "login",
      type: "text",
      value: "ecm21",
      disabled: false,
    }),
  }),
  field3: new FieldSettings({
    label: "Имя",
    input1: new Input({
      events: blurFocusEvents,
      name: "first_name",
      type: "text",
      value: "Андрей",
      disabled: false,
    }),
  }),
  field4: new FieldSettings({
    label: "Фамилия",
    input1: new Input({
      name: "second_name",
      type: "text",
      value: "Иванов",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field5: new FieldSettings({
    label: "Имя в чате",
    input1: new Input({
      name: "display_name",
      type: "text",
      value: "Андрей",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field6: new FieldSettings({
    label: "Телефон",
    input1: new Input({
      name: "phone",
      type: "text",
      value: "+79253777777",
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

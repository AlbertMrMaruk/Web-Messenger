import profile from "./profile.tmpl";
import { render } from "../../utils/renderDOM";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
class ProfileP extends Block {
  constructor(props: {}) {
    super("div", props);
  }
  render(): HTMLMetaElement {
    return this.compile(profile, this.props);
  }
}

const profileTemp = new ProfileP({
  name: "Андрей",
  field1: new FieldSettings({
    label: "Почта",
    name: "email",
    type: "text",
    value: "em@mail.ru",
    disabled: true,
  }),
  field2: new FieldSettings({
    label: "Логин",
    name: "login",
    type: "text",
    value: "ecm21",
    disabled: true,
  }),
  field3: new FieldSettings({
    label: "Имя",
    name: "first_name",
    type: "text",
    value: "Андрей",
    disabled: true,
  }),
  field4: new FieldSettings({
    label: "Фамилия",
    name: "second_name",
    type: "text",
    value: "Иванов",
    disabled: true,
  }),
  field5: new FieldSettings({
    label: "Имя в чате",
    name: "display_name",
    type: "text",
    value: "Андрей",
    disabled: true,
  }),
  field6: new FieldSettings({
    label: "Телефон",
    name: "phone",
    type: "text",
    value: "+7(925)377-77-77",
    disabled: true,
  }),
  fields: [],
  fieldContext: new FieldSettings({
    label: "Почта",
    name: "email",
    type: "text",
    value: "em@mail.ru",
    disabled: true,
  }),
});
render("#root", profileTemp);

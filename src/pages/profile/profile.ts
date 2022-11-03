import profile from "./profile.tmpl";
import { render } from "../../utils/renderDOM";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import Input from "../../components/inputs/inputs";

type profileType = {
  name?: string;
  field1?: FieldSettings;
  field2?: FieldSettings;
  field3?: FieldSettings;
  field4?: FieldSettings;
  field5?: FieldSettings;
  field6?: FieldSettings;
  events?: {};
};

class ProfileP extends Block<profileType> {
  constructor(props: profileType) {
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
    input1: new Input({
      name: "email",
      type: "text",
      value: "em@mail.ru",
      disabled: true,
    }),
  }),
  field2: new FieldSettings({
    label: "Логин",
    input1: new Input({
      name: "login",
      type: "text",
      value: "ecm21",
      disabled: true,
    }),
  }),
  field3: new FieldSettings({
    label: "Имя",
    input1: new Input({
      name: "first_name",
      type: "text",
      value: "Андрей",
      disabled: true,
    }),
  }),
  field4: new FieldSettings({
    label: "Фамилия",
    input1: new Input({
      name: "second_name",
      type: "text",
      value: "Иванов",
      disabled: true,
    }),
  }),
  field5: new FieldSettings({
    label: "Имя в чате",
    input1: new Input({
      name: "display_name",
      type: "text",
      value: "Андрей",
      disabled: true,
    }),
  }),
  field6: new FieldSettings({
    label: "Телефон",
    input1: new Input({
      name: "phone",
      type: "text",
      value: "+79253777777",
      disabled: true,
    }),
  }),
});
render("#root", profileTemp);

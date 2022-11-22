import fieldSettings from "./fields-settings.tmpl";
import Block from "../block";
import Input from "../inputs/inputs";

type FieldSetType = {
  labelClasses?: string;
  label?: string;
  input1?: Input;
  events?: {};
  text?: string;
};

export default class FieldSettings extends Block<FieldSetType> {
  constructor(props: FieldSetType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(fieldSettings, this.props);
  }
}

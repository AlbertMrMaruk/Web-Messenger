import field from "./fields.tmpl";
import Block from "../block";
import Input from "../inputs/inputs";

type FieldType = {
  labelClasses?: string;
  labelDisable?: string;
  label?: string;
  input1?: Input;
  events?: {};
  text?: string;
};

export default class Field extends Block<FieldType> {
  constructor(props: FieldType) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(field, this.props);
  }
}

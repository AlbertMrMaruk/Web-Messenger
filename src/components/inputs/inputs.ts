import inputs from "./inputs.tmpl";
import Block from "../block";

type InputProps = {
  type?: string;
  inputClasses?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  events?: {};
};

export default class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(inputs, this.props);
  }
}

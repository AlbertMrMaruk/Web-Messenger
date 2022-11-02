import fieldSettings from "./fields-settings.tmpl";
import Block from "../Block";

export default class FieldSettings extends Block {
  constructor(props: {}) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(fieldSettings, this.props);
  }
}

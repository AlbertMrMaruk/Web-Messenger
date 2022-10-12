import { fieldSettings } from "./fields-settings.tmpl";
import Handlebars from "handlebars";
class FieldSettings {
  constructor() {
    this.render();
  }
  render() {
    Handlebars.registerPartial("myFieldSettings", fieldSettings);
    return;
  }
}
const newFieldSettings = new FieldSettings();
export default newFieldSettings;

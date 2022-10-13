import { field } from "./fields.tmpl";

import Handlebars from "handlebars";
class Field {
  constructor() {
    this.render();
  }
  render() {
    Handlebars.registerPartial("myField", field);
    return;
  }
}

const newField = new Field();
export default newField;

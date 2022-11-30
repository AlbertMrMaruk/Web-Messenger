import { expect } from "chai";
import Block from "./block";

class ComponentTest extends Block<{}> {
  constructor(props: {}) {
    super("div", props);
  }

  render(): HTMLMetaElement {
    return this.compile(`<div>Test {{add}}</div>`, this.props);
  }
}

const testBlock = new ComponentTest({});
export default testBlock;

describe("Проверка класса Block", () => {
  it("При создании класса правильно рендерится компонент", () => {
    expect(testBlock.getContent().innerHTML).to.eq("<div>Test </div>");
  });
  it("При изменение  пропсов правильно обновляется компонент", () => {
    testBlock.setProps({ add: "New" });
    expect(testBlock.getContent().innerHTML).to.eq("<div>Test New</div>");
  });
});

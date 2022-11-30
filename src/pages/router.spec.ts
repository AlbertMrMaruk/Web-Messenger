import { expect } from "chai";
import testBlock from "../components/block.spec";
import Router from "./Router";
const RouterManager = new Router("app");
describe("Проверка Роутера", () => {
  it("Переход на новую страницу должен увеличивать history  ", () => {
    RouterManager.go("/chats");
    RouterManager.go("/second");
    expect(window.history.length).to.eq(3);
  });
  it("При запросе роута должен выдать route соответствующий pathname", () => {
    RouterManager.use("/cha", testBlock);
    expect(RouterManager.getRoute("/cha")).to.not.eq(null);
  });
  it("При запросе несуществующего роута должен вернуть null", () => {
    RouterManager.use("/cha", testBlock);
    expect(RouterManager.getRoute("/chat")).to.eq(null);
  });
});

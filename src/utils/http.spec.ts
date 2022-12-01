import { expect } from "chai";
import HTTPTransport from "./fetchUrl";
import { BASE_URL } from "./variables";

const http = new HTTPTransport(BASE_URL);
describe("Проверка модуля отправки запросов", () => {
  it("Запрос get правильно работает", async () => {
    const resp = await http
      .get(`/chats`, { data: JSON.stringify("smt") })
      .then((res: XMLHttpRequest) => JSON.parse(res.response));
    expect(resp.reason).to.eq("Cookie is not valid");
  });
  it("Запрос delete правильно работает", async () => {
    const resp = await http
      .delete(`/chats`, { data: JSON.stringify("delte") })
      .then((res: XMLHttpRequest) => JSON.parse(res.response));
    expect(resp.reason).to.eq("Cookie is not valid");
  });
  it("Запрос post правильно работает", async () => {
    const resp = await http
      .post(`/chats`, { data: JSON.stringify("delte") })
      .then((res: XMLHttpRequest) => JSON.parse(res.response));
    expect(resp.reason).to.eq("Cookie is not valid");
  });
  it("Запрос put правильно работает", async () => {
    const resp = await http
      .put(`/chats/users`, { data: JSON.stringify("delte") })
      .then((res: XMLHttpRequest) => JSON.parse(res.response));
    expect(resp.reason).to.eq("Cookie is not valid");
  });
});

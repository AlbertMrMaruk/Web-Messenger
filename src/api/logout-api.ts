import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const logoutAPIInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2");

class LogoutAPI extends BaseAPI {
  public create(props: {}) {
    console.log(props);
    return logoutAPIInstance.post("/auth/logout", props);
  }
}

export default new LogoutAPI();

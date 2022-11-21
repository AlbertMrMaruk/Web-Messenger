import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const loginAPIInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2");

class LoginAPI extends BaseAPI {
  public create(props: {}) {
    return loginAPIInstance.post("/auth/signin", props);
  }
}

export default new LoginAPI();

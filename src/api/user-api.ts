import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const userAPIInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2");

class UserAPI extends BaseAPI {
  public create(props: {}) {
    return userAPIInstance.post("/auth/signup", props);
  }
  public request(props: {}) {
    return userAPIInstance.get("/auth/user", props);
  }
}

export default new UserAPI();

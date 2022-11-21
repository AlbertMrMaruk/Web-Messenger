import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const profileAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2"
);

class ProfileAPI extends BaseAPI {
  public update(props: {}) {
    return profileAPIInstance.put("/user/profile", props);
  }
}

export default new ProfileAPI();

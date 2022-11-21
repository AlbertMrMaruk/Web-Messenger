import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const profilePassAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2"
);

class ProfilePassAPI extends BaseAPI {
  public update(props: {}) {
    return profilePassAPIInstance.put("/user/password", props);
  }
}

export default new ProfilePassAPI();

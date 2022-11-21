import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const profileAvatarAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2"
);

class ProfileAvatarAPI extends BaseAPI {
  public update(props: {}) {
    return profileAvatarAPIInstance.put("/user/profile/avatar", props);
  }
}

export default new ProfileAvatarAPI();

import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class ProfileAvatarAPI extends BaseAPI {
  public update(props: {}) {
    return chatsAPIInstance.put("/user/profile/avatar", props);
  }
}

export default new ProfileAvatarAPI();

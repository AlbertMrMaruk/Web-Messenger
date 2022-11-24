import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class ProfileAPI extends BaseAPI {
  public update(props: {}) {
    return chatsAPIInstance.put("/user/profile", props);
  }
}

export default new ProfileAPI();

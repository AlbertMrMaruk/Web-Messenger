import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class ProfilePassAPI extends BaseAPI {
  public update(props: {}) {
    return chatsAPIInstance.put("/user/password", props);
  }
}

export default new ProfilePassAPI();

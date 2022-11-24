import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class LoginAPI extends BaseAPI {
  public create(props: {}) {
    return chatsAPIInstance.post("/auth/signin", props);
  }
}

export default new LoginAPI();

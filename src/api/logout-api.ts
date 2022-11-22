import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class LogoutAPI extends BaseAPI {
  public create(props: {}) {
    return chatsAPIInstance.post("/auth/logout", props);
  }
}

export default new LogoutAPI();

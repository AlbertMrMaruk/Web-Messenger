import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class UserAPI extends BaseAPI {
  public create(props: {}) {
    return chatsAPIInstance.post("/auth/signup", props);
  }
  public request(props: {}) {
    return chatsAPIInstance.get("/auth/user", props);
  }
}

export default new UserAPI();

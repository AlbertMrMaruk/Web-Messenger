import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class SearchAPI extends BaseAPI {
  public create(props: {}) {
    return chatsAPIInstance.post("/user/search", props);
  }
}

export default new SearchAPI();

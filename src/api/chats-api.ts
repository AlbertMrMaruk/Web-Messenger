import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class ChatsAPI extends BaseAPI {
  public create(props: {}) {
    return chatsAPIInstance.post("/chats", props);
  }
  public request(props: {}) {
    return chatsAPIInstance.get("/chats", props);
  }
  public delete(props: {}) {
    return chatsAPIInstance.delete("/chats", props);
  }
}

export default new ChatsAPI();

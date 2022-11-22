import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class ChatsUsersAPI extends BaseAPI {
  public delete(props: {}) {
    return chatsAPIInstance.delete("/chats/users", props);
  }
  public update(props: {}) {
    return chatsAPIInstance.put(`/chats/users`, props);
  }
  public request(props: any) {
    return chatsAPIInstance.get(`/chats/${props.id}/users`, props);
  }
}

export default new ChatsUsersAPI();

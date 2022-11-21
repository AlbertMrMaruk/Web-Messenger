import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const chatsUsersAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2"
);

class ChatsUsersAPI extends BaseAPI {
  public delete(props: {}) {
    return chatsUsersAPIInstance.delete("/chats/users", props);
  }
  public update(props: {}) {
    return chatsUsersAPIInstance.put(`/chats/users`, props);
  }
  public request(props: any) {
    return chatsUsersAPIInstance.get(`/chats/${props.id}/users`, props);
  }
}

export default new ChatsUsersAPI();

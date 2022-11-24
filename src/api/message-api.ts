import { chatsAPIInstance } from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

class MessageAPI extends BaseAPI {
  public create(props: any) {
    return chatsAPIInstance.post(`/chats/token/${props.id}`);
  }
  public request(props: any) {
    return chatsAPIInstance.get(`/chats/${props.id}`, props);
  }
}

export default new MessageAPI();

import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const messageAPIInstance = new HTTPTransport(
  "https://ya-praktikum.tech/api/v2"
);

class MessageAPI extends BaseAPI {
  public create(props: any) {
    return messageAPIInstance.post(`/chats/token/${props.id}`);
  }
  public request(props: any) {
    return messageAPIInstance.get(`/chats/${props.id}`, props);
  }
}

export default new MessageAPI();

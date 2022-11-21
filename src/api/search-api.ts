import HTTPTransport from "../utils/fetchUrl";
import { BaseAPI } from "./base-api";

const searchAPIInstance = new HTTPTransport("https://ya-praktikum.tech/api/v2");

class SearchAPI extends BaseAPI {
  public create(props: {}) {
    return searchAPIInstance.post("/user/search", props);
  }
}

export default new SearchAPI();

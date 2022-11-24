import LoginAPI from "../login-api";
import store from "../store";
import { baseOptions } from "../../utils/variables";

class LoginController {
  public async logIn(props: {}) {
    try {
      await LoginAPI.create({ ...baseOptions, ...props })
        .then((data: XMLHttpRequest) => {
          store.set("auth", data.response);
          console.log(data.response);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }
}

export default new LoginController();

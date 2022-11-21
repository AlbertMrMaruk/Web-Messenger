import LoginAPI from "../login-api";
import store from "../store";
// import RouterManager from "../../pages/home/home";

const baseOptions = {
  mode: "cors",
  headers: {
    "content-type": "application/json",
  },
};

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

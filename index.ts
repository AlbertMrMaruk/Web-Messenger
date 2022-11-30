import * as Buttons from "./src/components/buttons/button";
import * as Fields from "./src/components/fields/fields";
import * as FieldsSettings from "./src/components/fields/fields-settings";
import "./src/pages/main.scss";
import * as Chat from "./src/components/chats/chat";
import chatTemp from "./src/pages/chats/chats";
import loginTemp from "./src/pages/auth/login";
import signupTemp from "./src/pages/auth/signup";
import profilePassChangeTemp from "./src/pages/profile/profile-pass-change";
import profileChangeTemp from "./src/pages/profile/profile-change";
import profileTemp from "./src/pages/profile/profile";
import FourP from "./src/pages/404/404";
import FiveP from "./src/pages/500/500";
import Router from "./src/pages/Router";

const RouterManager = new Router("#root");

RouterManager.use("/", loginTemp)
  .use("/chats", chatTemp)
  .use("/404", FourP)
  .use("/500", FiveP)
  .use("/signup", signupTemp)
  .use("/profile", profileTemp)
  .use("/profile-pass-change", profilePassChangeTemp)
  .use("/profile-change", profileChangeTemp)
  .start();

export default RouterManager;

export {
  Buttons,
  Fields,
  FourP,
  FieldsSettings,
  Chat,
  FiveP,
  chatTemp,
  loginTemp,
  signupTemp,
  profileChangeTemp,
  profilePassChangeTemp,
  profileTemp,
};

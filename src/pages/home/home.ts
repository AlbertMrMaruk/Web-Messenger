import Router from "../Router";
import {
  chatTemp,
  loginTemp,
  signupTemp,
  profileChangeTemp,
  profilePassChangeTemp,
  profileTemp,
} from "../../../index";

// type HomeType = {
//   wrapperClass?: string;
//   events?: {};
//   link1?: Link;
//   link2?: Link;
//   link3?: Link;
//   link4?: Link;
//   link5?: Link;
//   link6?: Link;
// };

const RouterManager = new Router("#root");

// const homeTemp: HomeType = {
//   wrapperClass: "home-wrapper",
//   // link1: new Link({
//   //   text: "Войти",
//   //   class: "btn-link",
//   //   events: {
//   //     click: (e: Event) => {
//   //       e.preventDefault();
//   //       RouterManager.go("/login");
//   //     },
//   //   },
//   // }),
//   // link2: new Link({
//   //   text: "Создать аккаунт",
//   //   class: "btn-link",
//   //   events: {
//   //     click: (e: Event) => {
//   //       e.preventDefault();
//   //       RouterManager.go("/signup");
//   //     },
//   //   },
//   // }),
//   // link3: new Link({
//   //   text: "Страница чата",
//   //   class: "btn-link",
//   //   events: {
//   //     click: (e: Event) => {
//   //       e.preventDefault();
//   //       RouterManager.go("/chats");
//   //     },
//   //   },
//   // }),
//   // link4: new Link({
//   //   text: "Страница профиля",
//   //   class: "btn-link",
//   //   events: {
//   //     click: (e: Event) => {
//   //       e.preventDefault();
//   //       RouterManager.go("/profile");
//   //     },
//   //   },
//   // }),
//   // link5: new Link({
//   //   text: "Страница изменения профиля",
//   //   class: "btn-link",
//   //   events: {
//   //     click: (e: Event) => {
//   //       e.preventDefault();
//   //       RouterManager.go("/profile-change");
//   //     },
//   //   },
//   // }),
//   // link6: new Link({
//   //   text: "Страница изменения пароля",
//   //   class: "btn-link",
//   //   events: {
//   //     click: (e: Event) => {
//   //       e.preventDefault();
//   //       RouterManager.go("/profile-pass-change");
//   //     },
//   //   },
//   // }),
// };

// class HomeP extends Block<HomeType> {
//   constructor() {
//     super("div", homeTemp);
//   }
//   render(): HTMLMetaElement {
//     return this.compile(home, this.props);
//   }
// }

RouterManager.use("/", loginTemp)
  .use("/chats", chatTemp)
  .use("/signup", signupTemp)
  .use("/profile", profileTemp)
  .use("/profile-pass-change", profilePassChangeTemp)
  .use("/profile-change", profileChangeTemp)
  .start();

export default RouterManager;

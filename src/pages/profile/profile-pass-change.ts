import profilePassChange from "./profile-pass-change.tmpl";
import Button from "../../components/buttons/button";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import checkField from "../../utils/checkField";
checkField;
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";
import ButtonIcon from "../../components/buttons/button-icon";
import connect from "../../api/connect-block";
import UserController from "../../api/controlers/UserController";
import RouterManager from "../home/home";
import Avatar from "../../components/avatar/avatar";
import store from "../../api/store";

type ProfilePassChangeType = {
  name?: string;
  field1?: FieldSettings;
  field2?: FieldSettings;
  field3?: FieldSettings;
  avatar1?: Avatar;
  events?: {};
  btnContext?: Button;
  btnIcon1: ButtonIcon;
};

const profilePassChangeTemp: ProfilePassChangeType = {
  name: "Андрей",
  field1: new FieldSettings({
    label: "Старый пароль",
    input1: new Input({
      name: "oldPassword",
      type: "password",
      value: "",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  avatar1: new Avatar({
    src: "https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg",
    class: "avatar-wrapper-img",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        store.set("profile.modalOff", false);
      },
    },
  }),
  field2: new FieldSettings({
    label: "Пароль",
    input1: new Input({
      name: "newPassword",
      type: "password",
      value: "",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field3: new FieldSettings({
    label: "Подтвердить пароль",
    input1: new Input({
      name: "password_confirm",
      type: "password",
      value: "",
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  btnContext: new Button({
    text: "Сохранить",
    wrapperClass: "btn btn-secondary",
  }),
  btnIcon1: new ButtonIcon({
    wrapperClass: "btn btn-secondary btn-circle btn-circle-profile",
    innerClass: "btn-circle-icon fa-solid fa-arrow-left",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        RouterManager.back();
      },
    },
  }),
};

class ProfilePassChangeP extends Block<ProfilePassChangeType> {
  constructor() {
    super("div", profilePassChangeTemp);
    UserController.getUser();
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(profilePassChange, this.props);
    resEl.querySelector("form")?.addEventListener("submit", (e: any) => {
      e.preventDefault();
      const inputs = e.target.querySelectorAll(".field-input");
      const formData = [...inputs].reduce((res: any, el: HTMLInputElement) => {
        checkField(el);
        if (el.name !== "password_confirm") res[el.name] = el.value;
        return res;
      }, {});
      RouterManager.go("/profile");
      UserController.updatePassword({ data: JSON.stringify(formData) });
    });
    return resEl;
  }
}

const withPage = connect((state) => ({
  ...state.user,
  avatar1: new Avatar({
    src:
      state.user?.avatar ??
      "https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg",
    class: "avatar-wrapper-img",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        store.set("profile.modalOff", false);
      },
    },
  }),
}));
const ProfilePassChangePC = withPage(ProfilePassChangeP);

export default ProfilePassChangePC;

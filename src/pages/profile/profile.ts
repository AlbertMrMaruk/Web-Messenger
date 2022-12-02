import profile from "./profile.tmpl";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import Input from "../../components/inputs/inputs";
import ButtonIcon from "../../components/buttons/button-icon";
import Link from "../../components/links/link";
import UserController from "../../api/controlers/UserController";
import RouterManager from "../../../index";
import connect from "../../api/connect-block";
import Avatar from "../../components/avatar/avatar";
import store from "../../api/store";

type ProfileType = {
  name?: string;
  field1?: FieldSettings;
  field2?: FieldSettings;
  field3?: FieldSettings;
  field4?: FieldSettings;
  field5?: FieldSettings;
  field6?: FieldSettings;
  btnIcon1?: ButtonIcon;
  link1?: Link;
  link2?: Link;
  link3?: Link;
  events?: {};
};

const profileTemp: ProfileType = {
  link1: new Link({
    text: "Изменить данные",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        RouterManager.go("/profile-change");
      },
    },
    class: "link-auth",
  }),
  link2: new Link({
    text: "Изменить пароль",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        RouterManager.go("/profile-pass-change");
      },
    },
    class: "link-auth",
  }),
  link3: new Link({
    text: "Выйти",
    class: "link-auth link-red",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        UserController.logOut();
        RouterManager.go("/");
      },
    },
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

class ProfileP extends Block<ProfileType> {
  constructor() {
    super("div", profileTemp);
    UserController.getUser();
  }
  render(): HTMLMetaElement {
    return this.compile(profile, this.props);
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
  name: state.user?.display_name ?? state.user?.first_name,
  field1: new FieldSettings({
    label: "Почта",
    input1: new Input({
      name: "email",
      type: "text",
      value: state.user?.email,
      disabled: true,
    }),
  }),
  field2: new FieldSettings({
    label: "Логин",
    input1: new Input({
      name: "login",
      type: "text",
      value: state.user?.login,
      disabled: true,
    }),
  }),
  field4: new FieldSettings({
    label: "Фамилия",
    input1: new Input({
      name: "second_name",
      type: "text",
      value: state.user?.second_name,
      disabled: true,
    }),
  }),
  field5: new FieldSettings({
    label: "Имя в чате",
    input1: new Input({
      name: "display_name",
      type: "text",
      value: state.user?.display_name,
      disabled: true,
    }),
  }),
  field6: new FieldSettings({
    label: "Телефон",
    input1: new Input({
      name: "phone",
      type: "text",
      value: state.user?.phone,
      disabled: true,
    }),
  }),
  field3: new FieldSettings({
    label: "Имя",
    input1: new Input({
      name: "first_name",
      type: "text",
      value: state.user?.first_name,
      disabled: true,
    }),
  }),
}));
const ProfilePC = withPage(ProfileP);

export default ProfilePC;

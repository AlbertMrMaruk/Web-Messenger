import profileChange from "./profile-change.tmpl";
import Button from "../../components/buttons/button";
import Block from "../../components/block";
import FieldSettings from "../../components/fields/fields-settings";
import checkField from "../../utils/checkField";
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";
import ButtonIcon from "../../components/buttons/button-icon";
import connect from "../../api/connect-block";
import UserController from "../../api/controlers/UserController";
import RouterManager from "../home/home";
import Modal from "../../components/modal/modal";
import store from "../../api/store";
import Avatar from "../../components/avatar/avatar";

type ProfileChangeType = {
  name?: string;
  field1?: FieldSettings;
  field2?: FieldSettings;
  field3?: FieldSettings;
  field4?: FieldSettings;
  field5?: FieldSettings;
  field6?: FieldSettings;
  field7?: FieldSettings;
  avatar1?: Avatar;
  events?: {};
  modal1?: Modal;
  btnContext?: Button;
  btnIcon1?: ButtonIcon;
};

const profileChangeTemp: ProfileChangeType = {
  btnContext: new Button({
    text: "Сохранить",
    wrapperClass: "btn btn-secondary",
  }),
  modal1: new Modal({
    modalOff: true,
    header: "Загрузите ваш аватар",
    buttonIcon: new ButtonIcon({
      events: {
        click: (e: Event) => {
          e.preventDefault();
          store.set("profile.modalOff", true);
        },
      },
      innerClass: "fa-solid fa-circle-xmark modal-window-wrapper-icon",
    }),
    submit: new Button({
      text: "Сохранить",
      wrapperClass: "btn btn-secondary",
    }),
    avatarModal: "FF",
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

class ProfileChangeP extends Block<ProfileChangeType> {
  constructor() {
    super("div", profileChangeTemp);
    UserController.getUser();
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(profileChange, this.props);
    const mainForm = resEl.querySelector(".profile-form") as HTMLFormElement;
    mainForm.onsubmit = (e: any) => {
      e.preventDefault();
      const inputs = e.target.querySelectorAll(".field-input");
      const formData = [...inputs].reduce((res: any, el: HTMLInputElement) => {
        checkField(el);
        res[el.name] = el.value;
        return res;
      }, {});
      UserController.updateUser({
        data: JSON.stringify({
          ...formData,
          avatar: store.getState()?.user?.avatar,
        }),
      });
      console.log(store.getState()?.user?.avatar);
      store.set("user.avatar", store.getState()?.user?.avatar);
      RouterManager.go("/profile");
    };
    const myUserForm = resEl.querySelector("#avatar-form") as HTMLFormElement;
    myUserForm.onsubmit = (e: Event) => {
      e.preventDefault();
      const form = new FormData(myUserForm as HTMLFormElement);
      UserController.updateAvatar({
        data: form,
        headers: {
          accept: "application/json",
        },
      });
    };

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
  modal1: new Modal({
    modalOff: state.profile?.modalOff ?? true,
    header: "Загрузите ваш аватар",
    avatarModal: "dhd",
    buttonIcon: new ButtonIcon({
      events: {
        click: (e: Event) => {
          e.preventDefault();
          store.set("profile.modalOff", true);
        },
      },
      innerClass: "fa-solid fa-circle-xmark modal-window-wrapper-icon",
    }),
    submit: new Button({
      text: "Сохранить",
      wrapperClass: "btn btn-secondary",
    }),
  }),
  name: state.user?.display_name ?? state.user?.first_name,
  field1: new FieldSettings({
    label: "Почта",
    input1: new Input({
      name: "email",
      type: "text",
      value: state.user?.email,
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field2: new FieldSettings({
    label: "Логин",
    input1: new Input({
      name: "login",
      type: "text",
      value: state.user?.login,
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field4: new FieldSettings({
    label: "Фамилия",
    input1: new Input({
      name: "second_name",
      type: "text",
      value: state.user?.second_name,
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field5: new FieldSettings({
    label: "Имя в чате",
    input1: new Input({
      name: "display_name",
      type: "text",
      value: state.user?.display_name,
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field6: new FieldSettings({
    label: "Телефон",
    input1: new Input({
      name: "phone",
      type: "text",
      value: state.user?.phone,
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
  field3: new FieldSettings({
    label: "Имя",
    input1: new Input({
      name: "first_name",
      type: "text",
      value: state.user?.first_name,
      disabled: false,
      events: blurFocusEvents,
    }),
  }),
}));
const ProfileChangePC = withPage(ProfileChangeP);

export default ProfileChangePC;

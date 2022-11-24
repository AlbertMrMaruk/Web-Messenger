import chats from "./chats.tmpl";
import Block from "../../components/block";
import ChatCompP from "../../components/chats/chat";
import Field from "../../components/fields/fields";
import checkField from "../../utils/checkField";
import blurFocusEvents from "../../utils/inputEventsHandler";
import Input from "../../components/inputs/inputs";
import ButtonIcon from "../../components/buttons/button-icon";
import connect from "../../api/connect-block";
import ChatsController from "../../api/controlers/ChatsController";
import store from "../../api/store";
import UserController from "../../api/controlers/UserController";
import Avatar from "../../components/avatar/avatar";
import RouterManager from "../home/home";
import Link from "../../components/links/link";
import Modal from "../../components/modal/modal";
import Button from "../../components/buttons/button";

type ChatType = {
  chat1?: ChatCompP;
  chat2?: ChatCompP;
  field1?: Field;
  btnIcon1?: ButtonIcon;
  toolsOff?: boolean;
  btnIcon2?: ButtonIcon;
  btnIcon3?: ButtonIcon;
  sender?: string;
  modal3?: Modal;
  chatOn?: boolean;
  link1?: Link;
  modal1?: Modal;
  modal2?: Modal;
  link2?: Link;
  events?: {};
};
const chatTemp: ChatType = {
  btnIcon1: new ButtonIcon({
    wrapperClass: "btn btn-secondary btn-circle btn-create-chats",
    innerClass: "btn-circle-icon-chats fa-solid fa-plus",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        store.set("chats.modals.modal3.modalOff", false);
      },
    },
  }),
  field1: new Field({
    input1: new Input({
      type: "text",
      placeholder: "Сообщение",
      name: "message",
      inputClasses: "message-section-form-input",
    }),
    labelDisable: "disable",
    events: blurFocusEvents,
  }),
  btnIcon2: new ButtonIcon({
    wrapperClass: "icon-wrapper",
    innerClass: "fa-solid fa-trash",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        const state = store.getState();
        ChatsController.delete({
          data: JSON.stringify({ chatId: state.chats.current_chat_id }),
        });
      },
    },
  }),
  btnIcon3: new ButtonIcon({
    wrapperClass: "icon-wrapper",
    innerClass: "fa-solid fa-ellipsis-vertical",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        const toolsOff = store.getState().chats?.toolsOff ?? true;
        store.set("chats.toolsOff", !toolsOff);
      },
    },
  }),
  toolsOff: true,
  link1: new Link({
    text: "Добавить пользователя",
    class: "tools-wrapper-text",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        ChatsController.addUsers({ data: JSON.stringify({ users: [] }) });
      },
    },
  }),
  link2: new Link({
    text: "Удалить пользователя",
    class: "tools-wrapper-text",
  }),
  chatOn: false,
};
class ChatP extends Block<ChatType> {
  constructor() {
    super("div", chatTemp);
    UserController.getUser();
    ChatsController.get({
      data: JSON.stringify({ offset: 0, limit: 20, title: "" }),
    });
  }
  render(): HTMLMetaElement {
    const resEl = this.compile(chats, this.props);
    const form = resEl.querySelector(
      ".message-section-form"
    ) as HTMLFormElement;
    if (form)
      form.onsubmit = (e: any) => {
        e.preventDefault();
        const state = store.getState();
        const inputs = e.target.querySelectorAll(".field-input");
        const formData = [...inputs].reduce(
          (res: any, el: HTMLInputElement) => {
            checkField(el);
            res[el.name] = el.value;
            return res;
          },
          {}
        );
        state.socket.send(
          JSON.stringify({
            content: formData.message,
            type: "message",
          })
        );
        inputs.forEach((el: HTMLInputElement) => (el.value = ""));
        console.log(formData);
      };
    const formCreateChat = resEl.querySelector(
      "#chatname-form"
    ) as HTMLFormElement;
    if (formCreateChat)
      formCreateChat.onsubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(formCreateChat);
        ChatsController.create({
          data: JSON.stringify({ title: formData.get("chatname") }),
          chatName: formData.get("chatname"),
        });
        store.set("chats.modals.modal3.modalOff", true);
        // store.set("chats.modals.modal1.modalOff", false);
      };
    const el = resEl.querySelector("#search-users") as HTMLInputElement;
    if (el)
      el.onblur = () => {
        UserController.searchUser({
          data: JSON.stringify({ login: el.value }),
        });
      };
    return resEl;
  }
}
const withPage = connect((state) => ({
  user: state.user,
  ...state.chats,
  ...state.chats?.messages,
  avatar1: new Avatar({
    src:
      state.user?.avatar ??
      "https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg",
    class: "header-wrapper-img",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        RouterManager.go("/profile");
      },
    },
  }),
  modal1: new Modal({
    modalOff: state.chats?.modals?.modal1?.modalOff ?? true,
    header: "Добавить пользователя",
    type: "add",
    wrapperClass: "chats-modal",
    buttonIcon: new ButtonIcon({
      events: {
        click: (e: Event) => {
          e.preventDefault();
          store.set("chats.modals.modal1.modalOff", true);
        },
      },
      innerClass: "fa-solid fa-circle-xmark modal-window-wrapper-icon",
    }),
    ...state?.chats?.modals?.modal1?.users,
    inputSearch: true,
  }),
  modal2: new Modal({
    modalOff: state.chats?.modals?.modal2?.modalOff ?? true,
    header: "Удалить пользователя",
    wrapperClass: "chats-modal",
    buttonIcon: new ButtonIcon({
      events: {
        click: (e: Event) => {
          e.preventDefault();
          store.set("chats.modals.modal2.modalOff", true);
        },
      },
      innerClass: "fa-solid fa-circle-xmark modal-window-wrapper-icon",
    }),
    ...state?.chats?.modals?.modal2?.users,
    inputSearch: true,
  }),
  modal3: new Modal({
    modalOff: state.chats?.modals?.modal3?.modalOff ?? true,
    header: "Название чата",
    wrapperClass: "new-chats-modal",
    buttonIcon: new ButtonIcon({
      events: {
        click: (e: Event) => {
          e.preventDefault();
          store.set("chats.modals.modal3.modalOff", true);
        },
      },
      innerClass: "fa-solid fa-circle-xmark modal-window-wrapper-icon",
    }),
    inputText: "t",
    submit: new Button({
      text: "Создать",
      wrapperClass: "btn btn-secondary",
    }),
    ...state?.chats?.modals?.modal3?.users,
  }),
  link1: new Link({
    text: "Добавить пользователя",
    class: "tools-wrapper-text",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        store.set("chats.modals.modal1.modalOff", false);
        const stateUsers = state.chats?.modal1?.users ?? {};
        Object.keys(stateUsers).forEach((el: string) => {
          store.set(`chats.modal1.users.${el}`, "");
        });
      },
    },
  }),
  link2: new Link({
    text: "Удалить пользователя",
    class: "tools-wrapper-text",
    events: {
      click: (e: Event) => {
        e.preventDefault();
        store.set("chats.modals.modal2.modalOff", false);
        const stateUsers = state.chats?.modal2?.users ?? {};
        Object.keys(stateUsers).forEach((el: string) => {
          store.set(`chats.modal2.users.${el}`, "");
        });
        ChatsController.getChatUsers({
          data: JSON.stringify({ id: state?.chats?.current_chat_id }),
          id: state?.chats?.current_chat_id,
        });
      },
    },
  }),
}));
const ChatPC = withPage(ChatP);

export default ChatPC;

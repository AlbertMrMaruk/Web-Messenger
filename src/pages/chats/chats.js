import { chats } from "./chats.tmpl";
import Handlebars from "handlebars";
import { chat } from "../../components/chats/chat";

const template = Handlebars.compile(chats);
const chatsBlock = template({
  chatsContext: [
    {
      chatName: "Аркадий",
      time: "18:24",
      message: "Пока",
      sender: "Вы:",
    },
    {
      chatName: "Андрей",
      time: "08:24",
      message: "Привет",
      sender: "",
    },
  ],
});

const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", chatsBlock);

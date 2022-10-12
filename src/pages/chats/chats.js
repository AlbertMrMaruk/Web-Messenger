import { chats } from "./chats.tmpl";
import Handlebars from "handlebars";
import { chat } from "../../components/chats/chat";
const template = Handlebars.compile(chats);
const chatsBlock = template({});
const root = document.querySelector("#root");
root.insertAdjacentHTML("afterbegin", chatsBlock);

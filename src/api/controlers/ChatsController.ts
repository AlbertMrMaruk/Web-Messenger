import ChatsAPI from "../chats-api";
import ChatsUsersApi from "../chats-users-api";
import store from "../store";
import Chat from "../../components/chats/chat";
import MessageApi from "../message-api";
import Message from "../../components/message/message";
import isArray from "../../utils/isArray";
import { baseOptions, BASE_URL } from "../../utils/variables";

class ChatsController {
  public async create(props: any) {
    try {
      ChatsAPI.create({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          let state = store.getState();
          const el = JSON.parse(data.response);
          const chatsAll = state?.chats?.chatsAll ?? [];
          const deleteChl = state?.chats?.deleteChl ?? [];
          store.set("chats", {
            ...state.chats,
            chatsAll: [...chatsAll, el],
            current_chat_id: el.id,
            deleteChl: deleteChl.filter(
              (el: string) => el !== `chat${chatsAll.length + 1}`
            ),
            [`chat${chatsAll.length + 1}`]: new Chat({
              chatName: props?.chatName ?? "Новый чат",
              time: isNaN(new Date(el?.last_message?.time).getHours())
                ? "00:00"
                : `${new Date(el?.last_message?.time).getHours()}:${new Date(
                    el?.last_message?.time
                  ).getMinutes()}
            `,
              message: el?.last_message?.content ?? "Нет сообщений",
              //   sender: "",
              id: el.id,
              index: chatsAll.length + 1,
              events: {
                click: clickChat.bind(el),
              },
            }),
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  public async get(props: {}) {
    try {
      ChatsAPI.request({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const chats = JSON.parse(data.response);
          chats.forEach((el: any, ind: number) => {
            const state = store.getState();
            store.set("chats", {
              ...state.chats,
              chatsAll: chats,
              [`chat${ind + 1}`]: new Chat({
                chatName: el?.title ?? "Новый чат",
                avatar: el?.avatar
                  ? `${BASE_URL}/resources/${el.avatar}`
                  : "https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg",
                time: isNaN(new Date(el?.last_message?.time).getHours())
                  ? "00:00"
                  : `${new Date(el?.last_message?.time).getHours()}:${new Date(
                      el?.last_message?.time
                    ).getMinutes()}
                `,
                message: el?.last_message?.content ?? "Нет сообщений",
                // sender: "Вы:",
                id: el.id,
                index: ind + 1,
                events: {
                  click: clickChat.bind(el),
                },
              }),
            });
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  public async delete(props: {}) {
    try {
      let state = store.getState();
      state.chats.chatsAll = state.chats.chatsAll.filter(
        (el: any) => el.id !== state.chats.current_chat_id
      );
      ChatsAPI.delete({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const chat = JSON.parse(data.response);
          const state = store.getState();
          const deletChlArr = state.chats.deleteChl ?? [];
          store.set("chats", {
            ...state.chats,
            deleteChl: [
              ...deletChlArr,
              `chat${
                document.querySelector(`[data-id="${chat.result.id}"]`)?.id
              }`,
            ],
            chatOn: false,
            chatsAll: state.chats.chatsAll.filter(
              (el: any) => el.id !== chat.result.id
            ),
          });
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  public async addUsers(props: {}) {
    try {
      ChatsUsersApi.update({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const resp = data.response;
          console.log(resp);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  public async deleteUsers(props: {}) {
    try {
      ChatsUsersApi.delete({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const resp = data.response;
          console.log(resp);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  public async getChatUsers(props: {}) {
    try {
      ChatsUsersApi.request({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const state = store.getState();
          const users = JSON.parse(data.response);

          store.set(`chats.modals.modal2.users`, {
            ...users.reduce(
              (acc: any, el: any, index: number) => ({
                ...acc,
                [`user${index + 1}`]: new Chat({
                  chatName: el.login,
                  events: {
                    click: () => {
                      new ChatsController().deleteUsers({
                        data: JSON.stringify({
                          users: [el.id],
                          chatId: state.chats?.current_chat_id,
                        }),
                      });
                      store.set(`chats.modals.modal2.modalOff`, true);
                    },
                  },
                }),
              }),
              {}
            ),
          });
        }
      );
    } catch (error) {}
  }
  public async getToken(props: {}) {
    try {
      const res = await MessageApi.create({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const resp = JSON.parse(data.response);
          store.set("chats.token", resp.token);
          return resp.token;
        }
      );
      return res;
    } catch (err) {
      console.log(err);
    }
  }
}

async function clickChat(e: Event) {
  try {
    const state = store.getState();
    e.preventDefault();
    document
      .querySelector(".chat-wrapper-selected")
      ?.classList.remove("chat-wrapper-selected");
    const el = document.querySelector(`[data-id='${this.id}']`);
    el?.classList.add("chat-wrapper-selected");
    store.set("chats", {
      ...state.chats,
      sender: el?.querySelector(".chat-info-wrapper-text")?.textContent,
      chatOn: true,
      current_chat_id: this.id,
    });
    const chats = new ChatsController();
    await chats.getToken({
      id: this.id,
    });
    const socket = new WebSocket(
      `wss://ya-praktikum.tech/ws/chats/${state.user?.id}/${this.id}/${state.chats?.token}`
    );
    state.socket = socket;
    socket.addEventListener("open", () => {
      console.log("Соединение установлено");
      state.chats.messages = {};
      socket.send(
        JSON.stringify({
          content: "0",
          type: "get old",
        })
      );
    });

    socket.addEventListener("close", (event) => {
      if (event.wasClean) {
        console.log("Соединение закрыто чисто");
      } else {
        console.log("Обрыв соединения");
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener("message", (event) => {
      console.log("Получены данные", event.data);
      let mess = JSON.parse(event.data);
      if (!isArray(mess)) {
        mess = [mess];
      }

      if (mess[0]?.user_id) {
        const messages = state.chats?.messages ?? {};
        console.log(mess, messages);
        const messObj = mess.reduce(
          (acc: any, el: any, index: number) => ({
            ...acc,
            [`message${
              mess.length === 1
                ? Object.keys(messages).length + 1
                : mess.length - index
            }`]: new Message({
              text: el?.content,
              outerClass:
                el?.user_id !== state.user.id
                  ? "message-wrapper-receive"
                  : "message-wrapper-send",
              class: `message message-${
                el?.user_id !== state.user.id ? "receive" : "send"
              }`,
            }),
          }),
          {}
        );

        store.set("chats.messages", {
          ...messages,
          ...messObj,
        });
        console.log(messages, messObj, state.chats.messages);
      }
    });

    socket.addEventListener("error", (event: any) => {
      console.log("Ошибка", event.message);
    });
  } catch (err) {
    console.log(err);
  }
}

export default new ChatsController();

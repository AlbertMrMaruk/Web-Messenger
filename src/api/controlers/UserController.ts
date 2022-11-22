import UserAPI from "../user-api";
import LogoutAPI from "../logout-api";
import store from "../store";
import ProfileApi from "../profile-api";
import ProfilePassApi from "../profile-pass-api";
import ProfileAvatarApi from "../profile-avatar-api";
import SearchApi from "../search-api";
import Chat from "../../components/chats/chat";
import ChatsController from "./ChatsController";
import { baseOptions, BASE_URL } from "../../utils/variables";

class UserController {
  public async createUser(props: {}) {
    try {
      await UserAPI.create({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) =>
          store.set("user", {
            id: JSON.parse(data.response).id,
          })
      );
    } catch (err) {
      console.log(err);
    }
  }
  public async getUser() {
    await UserAPI.request(baseOptions).then((data: XMLHttpRequest) => {
      const user = JSON.parse(data.response);
      store.set("user", {
        ...user,
        avatar: user?.avatar
          ? `${BASE_URL}/resources/${user.avatar}`
          : `https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg`,
      });
    });
  }
  public async logOut() {
    LogoutAPI.create(baseOptions).then(() => {});
  }
  public async updateUser(props: {}) {
    ProfileApi.update({ ...baseOptions, ...props }).then(
      (data: XMLHttpRequest) => {
        const user = JSON.parse(data.response);
        store.set("user", {
          ...user,
          avatar: user?.avatar
            ? `${BASE_URL}/resources/${user.avatar}`
            : `https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg`,
        });
        console.log(JSON.parse(data.response));
      }
    );
  }
  public async updatePassword(props: {}) {
    ProfilePassApi.update({ ...baseOptions, ...props }).then(
      (data: XMLHttpRequest) => {
        console.log(data.response);
      }
    );
  }
  public async updateAvatar(props: {}) {
    ProfileAvatarApi.update(props).then((data: XMLHttpRequest) => {
      const user = JSON.parse(data.response);
      store.set("profile.modalOff", true);
      store.set("user", {
        ...user,
        avatar: `${BASE_URL}resources/${user.avatar}`,
      });
    });
  }
  public async searchUser(props: any) {
    try {
      SearchApi.create({ ...baseOptions, ...props }).then(
        (data: XMLHttpRequest) => {
          const state = store.getState();
          const users = JSON.parse(data.response);
          const modal = "modal1";
          const stateUsers = state.chats?.modals?.[modal]?.users ?? {};
          Object.keys(stateUsers).forEach((el: string) => {
            store.set(`chats.modals.${modal}.users.${el}`, "");
          });
          store.set(`chats.modals.${modal}.users`, {
            ...users.reduce(
              (acc: any, el: any, index: number) => ({
                ...acc,
                [`user${index + 1}`]: new Chat({
                  chatName: el.login,
                  events: {
                    click: () => {
                      ChatsController.addUsers({
                        data: JSON.stringify({
                          users: [state.user?.id, el.id],
                          chatId: state.chats?.current_chat_id,
                        }),
                      });
                      store.set(`chats.modals.modal1.modalOff`, true);
                    },
                  },
                }),
              }),
              {}
            ),
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserController();

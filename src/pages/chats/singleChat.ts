// import chats from "./chats.tmpl";
// import Block from "../../components/block";
// import Field from "../../components/fields/fields";
// import checkField from "../../utils/checkField";
// import blurFocusEvents from "../../utils/inputEventsHandler";
// import Input from "../../components/inputs/inputs";
// import ButtonIcon from "../../components/buttons/button-icon";
// import connect from "../../api/connect-block";
// import ChatsController from "../../api/controlers/ChatsController";

// type chatType = {
//   field1?: Field;
//   btnIcon1?: ButtonIcon;
//   sender?: string;
//   chatOn?: boolean;
//   events?: {};
// };
// const chatTemp: chatType = {
//   btnIcon1: new ButtonIcon({
//     wrapperClass: "btn btn-secondary btn-circle btn-create-chats",
//     innerClass: "btn-circle-icon-chats fa-solid fa-plus",
//     link: "",
//     events: {
//       click: (e: Event) => {
//         e.preventDefault();
//         ChatsController.create({ data: JSON.stringify({ title: "my-chat " }) });
//       },
//     },
//   }),
//   field1: new Field({
//     input1: new Input({
//       type: "text",
//       placeholder: "Сообщение",
//       name: "message",
//       inputClasses: "message-section-form-input",
//     }),
//     labelDisable: "disable",
//     events: blurFocusEvents,
//   }),
//   sender: "Андрей",
//   chatOn: true,
// };
// class SingleChatP extends Block<chatType> {
//   constructor() {
//     super("div", chatTemp);
//     ChatsController.get({
//       data: JSON.stringify({ offset: 0, limit: 20, title: "" }),
//     });
//   }
//   render(): HTMLMetaElement {
//     const resEl = this.compile(chats, this.props);
//     resEl.querySelector("form")?.addEventListener("submit", (e: any) => {
//       e.preventDefault();
//       const inputs = e.target.querySelectorAll(".field-input");
//       const formData = [...inputs].reduce((res: any, el: HTMLInputElement) => {
//         checkField(el);
//         res[el.name] = el.value;
//         return res;
//       }, {});
//       console.log(formData);
//     });

//     // state.set("current_chat_id" = window.location.pathname.split("/")[2]

//     return resEl;
//   }
// }
// const withPage = connect();
// const SingleChatPC = withPage(SingleChatP);

// // function chatActivate(e: Event) {
// //   e.preventDefault();
// //   this.classList.add("chat-wrapper-selected");
// //   // chatTemp.setProps({
// //   //   chatOn: true,
// //   //   sender: this.querySelector(".chat-info-wrapper-text")?.textContent,
// //   // });
// // }

// export default SingleChatPC;

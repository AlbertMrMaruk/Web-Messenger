const checkRegExp: {
  [key: string]: RegExp;
} = {
  email: /^[a-zA-Z._-d]+@[a-z]+.[a-z]+$/,
  login: /^(?=^.{3,20}$)(?=.*\d?)(?=.*[A-Za-z-_]).*$/,
  first_name: /(^[А-Я]{1}[а-я]+$|^[A-Z]{1}[a-z]+$)/,
  second_name: /(^[А-Я]{1}[а-я]+$|^[A-Z]{1}[a-z]+$)/,
  display_name: /(^[А-Я]{1}[а-я]+$|^[A-Z]{1}[a-z]+$)/,
  phone: /^(?=^.{10,15}$)(\+?[0-9]+)$/,
  message: /.+/,
  password:
    /^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]?).*$/,
  oldPassword:
    /^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]?).*$/,
  newPassword:
    /^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]?).*$/,
  password_confirm:
    /^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]?).*$/,
};
export default function checkField(input: HTMLInputElement) {
  const regExp = checkRegExp[input.name];
  if (input.value.match(regExp)) {
    input.classList.remove("field-input-error");
    input.closest("div")?.nextElementSibling?.classList.add("tooltip-hidden");
    return true;
  } else {
    input.classList.add("field-input-error");
    input
      .closest("div")
      ?.nextElementSibling?.classList.remove("tooltip-hidden");
    return false;
  }
}

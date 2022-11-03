import checkField from "./checkField";

const validateInput = (e: FocusEvent) =>
  checkField(e.target as HTMLInputElement);
const blurFocusEvents = {
  focus: validateInput,
  blur: validateInput,
};

export default blurFocusEvents;

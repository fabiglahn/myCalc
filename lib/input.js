import { createElement } from "./elements.js";

export function createNumberInputComponent({ placeholder }) {
  return createElement("input", {
    type: "number",
    className: "input",
    placeholder: placeholder,
  });
}

// export function createNumberInputComponent(props) {
//   // const placeholder = props.placeholder;
//   const { placeholder } = props;

//   return createElement("input", {
//     type: "number",
//     className: "input",
//     placeholder: placeholder,
//   });
// }

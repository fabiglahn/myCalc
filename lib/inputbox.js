import { createElement } from "./elements.js";

export function createInputComponent() {
  const numberOne = createElement("input", {
    type: "number",
    className: "input",
    placeholder: "First number",
  });

  const numberTwo = createElement("input", {
    type: "number",
    className: "input",
    placeholder: "Second number",
  });

  const formElement = createElement(
    "div",
    {
      className: "input",
    },
    [numberOne, numberTwo]
  );
  return formElement;
}

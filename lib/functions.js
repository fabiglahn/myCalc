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

  const inputElement = createElement(
    "div",
    {
      className: "input",
    },
    [numberOne, numberTwo]
  );
  return inputElement;
}

export function createButtonComponent(type, onClick) {
  const addElement = createElement("button", {
    className: "button",
    textContent: "+",
    onclick: onClick,
  });

  return addElement;
}

const formElement = createElement("form", {
  className: "form",
  onsubmit: function (event) {
    event.preventDefault();
    onSubmit(numberOne.value + numberTwo.value);
  },
});

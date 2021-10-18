import { createElement } from "./elements.js";

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

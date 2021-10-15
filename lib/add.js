import { createElement } from "./elements.js";

export function createAddComponent() {
  const addElement = createElement("h2", {
    className: "addition",
    textContent: "+",
  });
  return addElement;
}

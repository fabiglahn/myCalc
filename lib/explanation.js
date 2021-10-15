import { createElement } from "./elements.js";

export function createExplComponent() {
  const explElement = createElement("h4", {
    className: "explanation",
    textContent: "Enter two numbers to add them up",
  });
  return explElement;
}

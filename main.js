import { createButtonComponent } from "./lib/functions.js";
import { createExplComponent } from "./lib/explanation.js";
import { createTitleComponent } from "./lib/titleComponent.js";

// Declare a function to create the elements and logic inside the #app element
function createApp() {
  // Get a reference to the <div id="app"></div> element
  const appElement = document.querySelector("#app");

  const titleComponent = createTitleComponent();
  appElement.append(titleComponent);

  const explComponent = createExplComponent();
  appElement.append(explComponent);

  const inputElement = createInputComponent();
  appElement.append(inputElement);

  const addElement = createButtonComponent();
  appElement.append(addElement);
}

// Run the createApp function
createApp();

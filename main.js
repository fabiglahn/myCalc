import {
  createButtonComponent,
  createInputComponent,
} from "./lib/functions.js";
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

  /*   const inputElement = createInputComponent();
  appElement.append(inputElement); */

  //Call the createInputComponent function to create 2 inputs for the numbers:
  const numberOne = createInputComponent("Number 1");
  const numberTwo = createInputComponent("Number 2");
  appElement.append(numberOne, numberTwo);

  const addElement = createButtonComponent();
  appElement.append(addElement);

  const calcAdd = createButtonComponent("+", function () {
    alert(Number(numberOne - value) + Number(numberTwo.value));

    appElement.append(calcAdd);
  });
}

// Run the createApp function
createApp();

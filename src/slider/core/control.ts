// import {
//   addListenerToElement,
//   getElementByClass,
//   getElementByDataAttr,
// } from "../utils/dom";

// const BUTTON_ATTR = "data-control";

// const enum DIRECTION {
//   LEFT = "left",
//   RIGHT = "right",
// }

// const buttonControlContainer = getElementByClass("slider__control");
// const sliderContainer = getElementByClass("slider__content");
// // const leftButton = getElementByDataAttr("control", DIRECTION.LEFT);
// // const rightButton = getElementByDataAttr("control", DIRECTION.RIGHT);

// const changeTranslateValue = (direction: DIRECTION) => {};

// const transitionSlide = (
//   direction: DIRECTION,
//   sliderContainer: HTMLElement
// ) => {
//   //   const currentTranslateValue = +sliderContainer.style.translate;

//   const computedStyle = window.getComputedStyle(sliderContainer);
//   const currentTransform = computedStyle.transform;

//   let translateX = 0;
//   if (currentTransform !== "none") {
//     const matrix = currentTransform.match(/matrix\(([^)]+)\)/);

//     // If a matrix was found, extract the translateX value
//     if (matrix) {
//       const values = matrix[1].split(", ").map(Number);
//       translateX = values[4]; // The translateX value is the 5th value in the matrix
//     }
//   }

//     console.log(sliderContainer.clientWidth);

//   const leftTransformValue = translateX + sliderContainer.clientWidth;
//   const rightTransformValue = translateX - sliderContainer.clientWidth;

//   switch (direction) {
//     case DIRECTION.LEFT:
//       sliderContainer.style.transform =
//         "translate(" + leftTransformValue + "px, 0)";
//       break;
//     case DIRECTION.RIGHT:
//       sliderContainer.style.transform =
//         "translate(" + rightTransformValue + "px, 0)";
//       break;
//   }
// };

// const onClickHandler = (event: Event) => {
//   const button = event.target as HTMLElement;
//   if (button) {
//     const direct = button.getAttribute(BUTTON_ATTR);

//     direct &&
//       direct === DIRECTION.LEFT &&
//       transitionSlide(DIRECTION.LEFT, sliderContainer);
//     direct &&
//       direct === DIRECTION.RIGHT &&
//       transitionSlide(DIRECTION.RIGHT, sliderContainer);
//   }
// };

// const addListerToButtons = () => {
//   if (buttonControlContainer) {
//     const childNodes = buttonControlContainer.children;

//     for (let child of childNodes) {
//       if (child.getAttribute(BUTTON_ATTR)) {
//         addListenerToElement([child as HTMLElement], "click", onClickHandler);
//       }
//     }
//   }
// };

// addListerToButtons();

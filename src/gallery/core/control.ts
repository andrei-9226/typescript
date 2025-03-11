import {
  addListenerToElement,
  getElementByClass,
  getElementByDataAttr,
} from "../utils/dom";

const BUTTON_ATTR = "data-control";

const enum DIRECTION {
  LEFT = "left",
  RIGHT = "right",
}

const buttonControlContainer = getElementByClass("gallery__control");
const galleryContainer = getElementByClass("gallery__content");
// const leftButton = getElementByDataAttr("control", DIRECTION.LEFT);
// const rightButton = getElementByDataAttr("control", DIRECTION.RIGHT);

const changeTranslateValue = (direction: DIRECTION) => {};

const transitionSlide = (
  direction: DIRECTION,
  galleryContainer: HTMLElement
) => {
  //   const currentTranslateValue = +galleryContainer.style.translate;

  const computedStyle = window.getComputedStyle(galleryContainer);
  const currentTransform = computedStyle.transform;

  let translateX = 0;
  if (currentTransform !== "none") {
    const matrix = currentTransform.match(/matrix\(([^)]+)\)/);

    // If a matrix was found, extract the translateX value
    if (matrix) {
      const values = matrix[1].split(", ").map(Number);
      translateX = values[4]; // The translateX value is the 5th value in the matrix
    }
  }

    console.log(galleryContainer.clientWidth);

  const leftTransformValue = translateX + galleryContainer.clientWidth;
  const rightTransformValue = translateX - galleryContainer.clientWidth;

  switch (direction) {
    case DIRECTION.LEFT:
      galleryContainer.style.transform =
        "translate(" + leftTransformValue + "px, 0)";
      break;
    case DIRECTION.RIGHT:
      galleryContainer.style.transform =
        "translate(" + rightTransformValue + "px, 0)";
      break;
  }
};

const onClickHandler = (event: Event) => {
  const button = event.target as HTMLElement;
  if (button) {
    const direct = button.getAttribute(BUTTON_ATTR);

    direct &&
      direct === DIRECTION.LEFT &&
      transitionSlide(DIRECTION.LEFT, galleryContainer);
    direct &&
      direct === DIRECTION.RIGHT &&
      transitionSlide(DIRECTION.RIGHT, galleryContainer);
  }
};

const addListerToButtons = () => {
  if (buttonControlContainer) {
    const childNodes = buttonControlContainer.children;

    for (let child of childNodes) {
      if (child.getAttribute(BUTTON_ATTR)) {
        addListenerToElement([child as HTMLElement], "click", onClickHandler);
      }
    }
  }
};

addListerToButtons();

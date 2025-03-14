import { SlideActions } from "../../store/actions";
import { domElement } from "../../utils/dom";
import { IControlSlider } from "./types/interfaces";

const enum KEYS {
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
}

const leftButton = domElement.getByDataAttr("control", "left");
const rightButton = domElement.getByDataAttr("control", "right");

class ButtonControl implements IControlSlider {
  constructor(
    private leftButton: HTMLElement,
    private rightButton: HTMLElement
  ) {
    this.leftButton.addEventListener("click", this.previous);
    this.rightButton.addEventListener("click", this.next);
  }

  previous(): void {
    SlideActions.decrement();
  }
  next(): void {
    SlideActions.increment();
  }
}

class KeyControl implements IControlSlider {
  constructor() {
    window.addEventListener("keydown", (event: KeyboardEvent) => {
      const key = event.key;
      if (key === KEYS.ARROW_RIGHT) {
        this.next();
      } else if (key === KEYS.ARROW_LEFT) {
        this.previous();
      }
    });
  }

  previous(): void {
    SlideActions.decrement();
  }
  next(): void {
    SlideActions.increment();
  }
}

new ButtonControl(leftButton, rightButton);

new KeyControl();

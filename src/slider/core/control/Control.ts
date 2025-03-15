import { SlideActions } from "../../store/actions";
import { domElement } from "../../utils/dom";
import { getTranslateX } from "../../utils/helpers";
import { IControlSlider } from "./types/interfaces";

const enum KEYS {
  ARROW_RIGHT = "ArrowRight",
  ARROW_LEFT = "ArrowLeft",
}

const sliderContainer = domElement.getByClassname("slider__content");

class DragAndDrop implements IControlSlider {
  private isDragging: boolean = false;
  private isTranslatingSlide: boolean = false;
  private startMovePointX: number = 0;
  private previousTranslateValue: number = 0;
  private currentTranslateValue: number = 0;

  constructor(private slider: HTMLElement) {
    this.slider.addEventListener("transitionend", () => {
      this.isTranslatingSlide = false;
    });
    this.slider.addEventListener("transitionstart", () => {
      this.isTranslatingSlide = true;
    });

    this.slider.addEventListener("mousedown", (event: MouseEvent) => {
      if (this.isTranslatingSlide) {
        return;
      }
      this.startMovePointX = event.clientX;
      this.previousTranslateValue = getTranslateX(this.slider);
      this.slider.style.cursor = "grabbing";
      this.slider.style.transition = "none";
      this.isDragging = true;

      this.slider.ondragstart = function () {
        return false;
      };

      this.slider.addEventListener("mousemove", this.onMouseMoveHandler);

      this.slider.onmouseup = () => {
        this.resetMoving();
        this.moveSlide();
        this.slider.onmouseup = null;
      };
      this.slider.onmouseleave = () => {
        this.resetMoving();
        this.moveSlide();
        this.slider.onmouseleave = null;
      };
    });
  }

  onMouseMoveHandler = (event: MouseEvent) => {
    if (!this.isDragging) {
      return;
    }
    const currentMousePositionX = event.pageX - this.slider.offsetLeft;

    this.currentTranslateValue =
      currentMousePositionX -
      this.startMovePointX +
      this.previousTranslateValue;

    this.setTransformValue(this.currentTranslateValue);
  };

  setTransformValue(currentTranslateValue: number) {
    this.slider.style.transform =
      "translate(" + currentTranslateValue + "px, 0)";
  }

  moveSlide() {
    const movedBy = this.currentTranslateValue - this.previousTranslateValue;
    let translate = 0;
    if (movedBy <= 0) {
      translate =
        this.previousTranslateValue -
        movedBy -
        (this.slider.clientWidth - movedBy);
    } else if (movedBy > 0) {
      translate =
        this.previousTranslateValue +
        movedBy +
        (this.slider.clientWidth - movedBy);
    }
    this.setTransformValue(translate);
  }

  resetMoving = () => {
    this.slider.removeEventListener("mousemove", this.onMouseMoveHandler);
    this.slider.style.cursor = "";
    this.isDragging = false;
    this.slider.style.transition = "transform 0.3s ease";
  };

  previous(): void {
    console.log("prev");
  }
  next(): void {
    console.log("next");
  }
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

new DragAndDrop(sliderContainer);

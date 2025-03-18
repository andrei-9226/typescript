import { SlideActions } from "../../store/actions";
import { SliderStore } from "../../store/store";
import { domElement } from "../../utils/dom";
import {
  getPaddingElement,
  getSizeElementWithoutPadding,
} from "../../utils/helpers";

class Preview {
  private listPreview: HTMLImageElement[] = [];
  private activeRunner: HTMLElement;
  private runnerFactor: number = 0;
  constructor(
    private store: SliderStore,
    private root: HTMLElement,
    listItems: HTMLImageElement[]
  ) {
    this.store = store;
    this.listPreview = [...listItems].map((item) => {
      const img = domElement.createImageElement(item.src, "", 120, 100);
      img.className = "slider__preview-item";
      return img;
    });
    this.activeRunner = domElement.createSpanElement([
      "slider__active-preview",
    ]);
    root.append(this.activeRunner, ...this.listPreview);
    this.store.addChangeSlideListener(this.setRunnerTranslate);
    this.initPreview();
  }

  initPreview() {
    this.listPreview.forEach((item, index) =>
      item.addEventListener("click", () => this.onSetActiveSlide(index))
    );
    this.setStyleToRunner();
  }

  onSetActiveSlide = (numberSlide: number) => {
    const SHIFT_FROM_ZERO_INDEX = 1;
    SlideActions.setState({
      currentActiveSlide: numberSlide + SHIFT_FROM_ZERO_INDEX,
    });
    this.setRunnerTranslate();
  };

  setRunnerTranslate = () => {
    const { currentActiveSlide, numberOfSlides } = this.store.state;
    if (numberOfSlides && currentActiveSlide > numberOfSlides) {
      return;
    }
    const transformValue =
      this.store.state.currentActiveSlide * this.runnerFactor -
      this.runnerFactor;
    this.activeRunner.style.transform =
      "translate(" + transformValue + "px, 0)";
  };

  setStyleToRunner() {
    const SIDES_OF_PADDING = 2;
    const item = getSizeElementWithoutPadding(this.listPreview[0]);
    const { paddingTop, paddingLeft } = getPaddingElement(this.listPreview[0]);

    this.activeRunner.style.width = `${item.width}px`;
    this.activeRunner.style.height = `${item.height}px`;
    this.activeRunner.style.top = `${paddingTop}px`;
    this.activeRunner.style.left = `${paddingLeft}px`;
    this.runnerFactor = paddingLeft * SIDES_OF_PADDING + item.width;
  }
}

export default Preview;

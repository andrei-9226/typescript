import { SliderStore, sliderStore } from "../store/store";
import { domElement } from "../utils/dom";

const slideItems = domElement.getAllByClassname("slide__item");
console.log(slideItems);

class Slider {
  private sliderItems: HTMLElement[];

  constructor(private store: SliderStore = store, sliderItems: HTMLElement[]) {
    this.store.addChangeSlideListener(this.slideChanged.bind(this));
    this.sliderItems = [...sliderItems];
  }

  slideChanged() {
    console.log(this.sliderItems.length);

    console.log("Changed slide ", this.store.getState().currentActiveSlide);
  }
}

new Slider(sliderStore, slideItems);

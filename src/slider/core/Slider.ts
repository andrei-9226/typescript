import { SliderStore, sliderStore } from "../store/store";

class Slider {
  constructor(private store: SliderStore = store) {
    this.store.addChangeSlideListener(this.slideChanged.bind(this));
  }

  slideChanged() {
    console.log("Changed slide ", this.store.getState().currentActiveSlide);
  }
}

new Slider(sliderStore);

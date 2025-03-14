import { SlideActions } from "../../store/actions";
import { SliderStore } from "../../store/store";

class InfinityMoveOption {
  private container: HTMLElement;
  private numberOfSlides: number;
  private sliderStore: SliderStore;

  constructor(
    container: HTMLElement,
    numberOfSlides: number,
    sliderStore: SliderStore
  ) {
    this.container = container;
    this.numberOfSlides = numberOfSlides;
    this.sliderStore = sliderStore;
  }

  iniInfinityMove() {
    this.container.addEventListener("transitionend", this.onRangeHandler);
  }

  onRangeHandler = () => {
    const FIRST_SLIDE_NUMBER = 1;
    const RANGE_MIN_SLIDE = 0;
    const RANGE_MAX_SLIDE = this.numberOfSlides + 1;

    const setLastSlide = async () => {
      await this.stopTransition();
      await this.setCurrentSlide(this.numberOfSlides);
      await this.addTransition();
    };

    const setFirstSlide = async () => {
      await this.stopTransition();
      await this.setCurrentSlide(FIRST_SLIDE_NUMBER);
      await this.addTransition();
    };

    if (this.sliderStore.state.currentActiveSlide === RANGE_MIN_SLIDE) {
      setLastSlide();
    } else if (this.sliderStore.state.currentActiveSlide === RANGE_MAX_SLIDE) {
      setFirstSlide();
    }
  };

  async stopTransition() {
    return new Promise((res) => {
      this.container.style.transition = "transform 0s";
      res(true);
    });
  }

  async setCurrentSlide(numberSlide: number) {
    const DELAY_FOR_CHANGE_IMAGE_WITHOUT_GLARE = 10;
    return new Promise((res) => {
      SlideActions.setState({ currentActiveSlide: numberSlide });
      setTimeout(() => {
        res(true);
      }, DELAY_FOR_CHANGE_IMAGE_WITHOUT_GLARE);
    });
  }

  async addTransition() {
    return new Promise((res) => {
      this.container.style.transition = "transform 0.2s";
      res(true);
    });
  }
}

export default InfinityMoveOption;

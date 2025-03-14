import { SliderStore, sliderStore } from "../store/store";
import { domElement } from "../utils/dom";
import InfinityMoveOption from "./control/InfinitySlides";

const counterSlide = domElement.getByClassname("counter");

const sliderItems = domElement.getAllByClassname("slide__item");
const sliderContainer = domElement.getByClassname("slider__content");

class Slider {
  private store: SliderStore;
  private container: HTMLElement;
  private sliderItems: HTMLElement[];
  private numberOfSlides: number = 0;

  constructor(
    store: SliderStore,
    container: HTMLElement,
    items: HTMLElement[]
  ) {
    this.store = store;
    counterSlide.innerHTML = `${this.store.state.currentActiveSlide}`;
    this.container = container;
    this.sliderItems = [...items];
    this.numberOfSlides = this.sliderItems.length;
    this.store.addChangeSlideListener(this.onMoveSlide.bind(this));
    this.initSlider();
  }

  initSlider() {
    this.store.setState({
      currentActiveSlide: 1,
      numberOfSlides: this.numberOfSlides,
    });
    this.onMoveSlide();
    this.addFirstAndLastSlideClone();

    const infinityOption = new InfinityMoveOption(
      this.container,
      this.numberOfSlides,
      this.store
    );
    infinityOption.iniInfinityMove();
  }

  onMoveSlide() {
    const containerWidth = this.container.clientWidth;
    const activeSlideNumber = this.store.state.currentActiveSlide;
    const transformValue = -containerWidth * activeSlideNumber;

    this.container.style.transform = "translate(" + transformValue + "px, 0)";

    counterSlide.innerHTML = `${this.store.state.currentActiveSlide}`;
  }

  addFirstAndLastSlideClone() {
    const cloneFirstElement = this.sliderItems[0].cloneNode(true);
    const cloneLastElement =
      this.sliderItems[this.sliderItems.length - 1].cloneNode(true);
    this.container.prepend(cloneLastElement);
    this.container.appendChild(cloneFirstElement);
  }
}

new Slider(sliderStore, sliderContainer, sliderItems);

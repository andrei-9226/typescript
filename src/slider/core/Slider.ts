import { SlideActions } from "../store/actions";
import { IStateSlider, SliderStore, sliderStore } from "../store/store";
import { domElement } from "../utils/dom";

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
    this.onMoveSlide();
    this.addFirstAndLastSlideClone();

    this.container.addEventListener("transitionend", () => {
      if (this.store.state.currentActiveSlide === 0) {
        const promise1 = () =>
          new Promise((res) => {
            this.container.style.transition = "transform 0s";
            console.log("promise 1");
            res(true);
          });
        const promise2 = () =>
          new Promise((res) => {
            SlideActions.setState({ currentActiveSlide: this.numberOfSlides });
            console.log("promise 2 ", this.store.state);
            setTimeout(() => {
              res(true);
            }, 10);
          });
        const promise3 = () =>
          new Promise((res) => {
            this.container.style.transition = "transform 0.2s";
            console.log("promise 3");
            res(true);
          });

        const fn = async () => {
          await promise1();
          await promise2();
          await promise3();
        };
        fn();
      }
    });
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

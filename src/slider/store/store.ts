import { ACTIONS_CHANGE_SLIDE } from "./actions";
import { dispatcher } from "./Dispatcher";

export interface IStateSlider {
  currentActiveSlide: number;
}

export class SliderStore {
  private state: IStateSlider;
  private listeners: Function[] = [];

  constructor(state: IStateSlider) {
    this.state = state;
    dispatcher.register(
      ACTIONS_CHANGE_SLIDE.INCREMENT,
      this.increment.bind(this)
    );

    dispatcher.register(
      ACTIONS_CHANGE_SLIDE.DECREMENT,
      this.decrement.bind(this)
    );
  }

  getState() {
    return this.state;
  }

  addChangeSlideListener(callback: Function) {
    this.listeners.push(callback);
  }

  increment() {
    this.state.currentActiveSlide++;
    this.emitChange();
  }

  decrement() {
    this.state.currentActiveSlide--;
    this.emitChange();
  }

  emitChange() {
    this.listeners.forEach((listener) => listener());
  }
}

export const sliderStore = new SliderStore({ currentActiveSlide: 0 });

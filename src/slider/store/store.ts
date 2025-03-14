import { ACTIONS_CHANGE_SLIDE } from "./actions";
import { dispatcher } from "./Dispatcher";

export interface IStateSlider {
  currentActiveSlide: number;
}

export class SliderStore {
  private _state: IStateSlider;
  private listeners: Function[] = [];

  constructor(state: IStateSlider) {
    this._state = state;
    dispatcher.register(
      ACTIONS_CHANGE_SLIDE.INCREMENT,
      this.increment.bind(this)
    );

    dispatcher.register(
      ACTIONS_CHANGE_SLIDE.DECREMENT,
      this.decrement.bind(this)
    );
    dispatcher.register(ACTIONS_CHANGE_SLIDE.SET_STATE, (state: IStateSlider) =>
      this.setState(state)
    );
  }

  get state() {
    return this._state;
  }

  setState(state: IStateSlider) {
    this._state = state;
    this.emitChange();
  }

  addChangeSlideListener(callback: Function) {
    this.listeners.push(callback);
  }

  increment() {
    this._state.currentActiveSlide++;
    this.emitChange();
  }

  decrement() {
    if (this.state.currentActiveSlide <= 0) {
      return;
    }
    this._state.currentActiveSlide--;
    this.emitChange();
  }

  emitChange() {
    this.listeners.forEach((listener) => listener());
  }
}

export const sliderStore = new SliderStore({
  currentActiveSlide: 1,
});

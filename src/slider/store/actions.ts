import { dispatcher } from "./Dispatcher";
import { IStateSlider } from "./store";

export type ActionType = {
  actionType: string;
  payload?: unknown;
};

export const enum ACTIONS_CHANGE_SLIDE {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  SET_STATE = "SET_STATE",
}

export const SlideActions = {
  increment: () => {
    dispatcher.dispatch({
      actionType: ACTIONS_CHANGE_SLIDE.INCREMENT,
    });
  },
  decrement: () => {
    dispatcher.dispatch({
      actionType: ACTIONS_CHANGE_SLIDE.DECREMENT,
    });
  },

  setState: (state: IStateSlider) => {
    dispatcher.dispatch({
      actionType: ACTIONS_CHANGE_SLIDE.SET_STATE,
      payload: state,
    });
  },
};

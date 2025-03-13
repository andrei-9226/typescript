import { dispatcher } from "./Dispatcher";

export type ActionType = {
  actionType: string;
};

export const enum ACTIONS_CHANGE_SLIDE {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
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
};

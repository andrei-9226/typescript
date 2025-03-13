import { ActionType } from "./actions";

class Dispatcher {
  private listeners: { [key: string]: Function[] } = {};

  register(actionType: string, callback: Function) {
    if (!this.listeners[actionType]) {
      this.listeners[actionType] = [];
    }
    this.listeners[actionType].push(callback);
  }

  dispatch({ actionType }: ActionType) {
    const listeners = this.listeners[actionType] || [];
    for (let listener of listeners) {
      listener();
    }
  }
}

export const dispatcher = new Dispatcher()

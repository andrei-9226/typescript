import { ActionType } from "./actions";

class Dispatcher {
  private listeners: { [key: string]: Function[] } = {};

  register(actionType: string, callback: Function) {
    if (!this.listeners[actionType]) {
      this.listeners[actionType] = [];
    }
    this.listeners[actionType].push(callback);
  }

  dispatch({ actionType, payload }: ActionType) {
    const listeners = this.listeners[actionType] || [];
    for (let listener of listeners) {
      payload ? listener(payload) : listener();
    }
  }
}

export const dispatcher = new Dispatcher();

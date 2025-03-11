export const getElementByDataAttr = (name: string, value: string = "") => {
  return <HTMLElement>document.querySelector(`[data-${name}="${value}"]`);
};

export const getElementByClass = (name: string) => {
  return <HTMLElement>document.querySelector(`.${name}`);
};

export const addListenerToElement = (
  elements: HTMLElement[],
  eventType: keyof HTMLElementEventMap,
  handler: (ev: Event) => void
) => {
  if (elements) {
    elements.forEach((element) => element.addEventListener(eventType, handler));
  } else {
    throw Error("Cant add listener to HTMLElement");
  }
};

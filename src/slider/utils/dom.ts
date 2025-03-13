class DomElement {
  private static instance: DomElement;

  public static getInstance() {
    if (!DomElement.instance) {
      return new DomElement();
    }
    return DomElement.instance;
  }

  getById(id: string) {
    const domElement = document.querySelector(`#${id}`);
    return this.checkElementExist(domElement, `Cant find element by id ${id}`);
  }

  getByDataAttr(name: string, value: string = "") {
    const dataAttr = value ? `[data-${name}="${value}"]` : `[data-${name}]`;
    const domElement = document.querySelector(dataAttr);
    return this.checkElementExist(
      domElement,
      `Cant find element by data-${name}-${value}`
    );
  }

  checkElementExist(element: Element | null, message: string) {
    if (element) {
      return element as HTMLElement;
    } else {
      throw Error(message);
    }
  }
}

export const domElement = DomElement.getInstance();

// export const getElementByDataAttr = (name: string, value: string = "") => {
//   return <HTMLElement>document.querySelector(`[data-${name}="${value}"]`);
// };

// export const getElementByClass = (name: string) => {
//   return <HTMLElement>document.querySelector(`.${name}`);
// };

// export const addListenerToElement = (
//   elements: HTMLElement[],
//   eventType: keyof HTMLElementEventMap,
//   handler: (ev: Event) => void
// ) => {
//   if (elements) {
//     elements.forEach((element) => element.addEventListener(eventType, handler));
//   } else {
//     throw Error("Cant add listener to HTMLElement");
//   }
// };

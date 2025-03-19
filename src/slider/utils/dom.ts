class DomElement {
  private static instance: DomElement;

  public static getInstance() {
    if (!DomElement.instance) {
      return new DomElement();
    }
    return DomElement.instance;
  }

  getByClassname(name: string) {
    const domElement = document.querySelector(`.${name}`);
    return this.checkElementExist(
      domElement,
      `Cant find element by ${name} class`
    );
  }

  getAllByClassname(name: string) {
    const domElement = document.querySelectorAll(`.${name}`);
    return this.checkListElementExist(
      domElement,
      `Cant find elements by ${name} class`
    );
  }

  getById(id: string) {
    const domElement = document.querySelector(`#${id}`);
    return this.checkElementExist(domElement, `Cant find element by ${id} id`);
  }

  getByDataAttr(name: string, value: string = "") {
    const dataAttr = value ? `[data-${name}="${value}"]` : `[data-${name}]`;
    const domElement = document.querySelector(dataAttr);
    return this.checkElementExist(
      domElement,
      `Cant find element by data-${name}-${value}`
    );
  }

  createImageElement(
    src: string,
    alt: string = "",
    width: number = 50,
    height: number = 50
  ) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.width = width;
    img.height = height;
    return img;
  }

  createSpanElement(className?: string[]) {
    const span = document.createElement("span");
    className && span.classList.add(...className);
    return span;
  }

  checkElementExist(element: Element | null, message: string) {
    if (element) {
      return element as HTMLElement;
    } else {
      throw Error(message);
    }
  }

  checkListElementExist(elements: NodeListOf<Element> | null, message: string) {
    if (elements) {
      return [...elements] as HTMLElement[];
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

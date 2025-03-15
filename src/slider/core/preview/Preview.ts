import { SliderStore } from "../../store/store";
import { domElement } from "../../utils/dom";

class Preview {
  private listPreview: HTMLImageElement[] = [];
  constructor(
    private store: SliderStore,
    private root: HTMLElement,
    listItems: HTMLImageElement[]
  ) {
    this.store = store;
    this.listPreview = [...listItems].map((item) => {
      const img = domElement.createImageElement(item.src, "", 100, 100);
      img.className = "slider__preview-item";
      return img;
    });
    root.append(...this.listPreview);
  }
}

export default Preview;

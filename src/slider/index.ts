import "./core/control";
import { domElement } from "./utils/dom";

// const galleryApp = document.querySelector("#slider") as HTMLElement;
// const imagesContainer = document.querySelector("[data-slider-images]")!;
// const buttonsControl = document.querySelector("[data-control]")!;

const slider = domElement.getById("slider");
const imagesContainer = domElement.getByDataAttr("slider-images");
const buttons = domElement.getByDataAttr("control");
console.log(buttons);

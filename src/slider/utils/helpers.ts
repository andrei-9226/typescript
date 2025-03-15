export function getTranslateX(domElement: HTMLElement) {
  const style = window.getComputedStyle(domElement);
  const transform = style.transform;

  let translateX = 0;

  if (transform && transform !== "none") {
    const matrix = new DOMMatrix(transform);
    translateX = matrix.m41;
  }
  return translateX;
}

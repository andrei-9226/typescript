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

export function getSizeElementWithoutPadding(element: HTMLElement): {
  width: number;
  height: number;
} {
  const { paddingTop, paddingRight, paddingBottom, paddingLeft } =
    getPaddingElement(element);

  const width = element.offsetWidth - paddingLeft - paddingRight;
  const height = element.offsetHeight - paddingTop - paddingBottom;

  return { width, height };
}

export function getPaddingElement(element: HTMLElement) {
  const elementStyles = window.getComputedStyle(element);
  const paddingTop = parseFloat(elementStyles.paddingTop);
  const paddingBottom = parseFloat(elementStyles.paddingBottom);
  const paddingLeft = parseFloat(elementStyles.paddingLeft);
  const paddingRight = parseFloat(elementStyles.paddingRight);
  return { paddingTop, paddingRight, paddingBottom, paddingLeft };
}

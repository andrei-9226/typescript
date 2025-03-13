const enum DATA_ATTR {
  DOWN = "down",
  UP = "up",
}

export function counterUpgrade(htmlWrapperCounter: HTMLElement) {
  let count = 0;

  const decreaseButton = document.createElement("button");
  decreaseButton.innerText = "-";
  decreaseButton.setAttribute("data-count", DATA_ATTR.DOWN);

  const increaseButton = document.createElement("button");
  increaseButton.innerText = "+";
  increaseButton.setAttribute("data-count", DATA_ATTR.UP);

  const countDigit = document.createElement("span");
  countDigit.innerText = `${0}`;
  countDigit.classList.add("counter");

  const updateCount = (event: MouseEvent) => {
    const buttonHtml = event.target as HTMLButtonElement;
    const attr = buttonHtml.getAttribute("data-count");

    switch (attr) {
      case DATA_ATTR.DOWN:
        count--;
        break;
      case DATA_ATTR.UP:
        count++;
        break;
    }
    countDigit.innerText = `${count}`
  };

  decreaseButton.addEventListener("click", updateCount);
  increaseButton.addEventListener("click", updateCount);

  htmlWrapperCounter.append(decreaseButton);
  htmlWrapperCounter.append(countDigit);
  htmlWrapperCounter.append(increaseButton);
}

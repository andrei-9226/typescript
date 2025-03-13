interface IItemCart {
  item: string;
  price: number;
  tax: ITax;
}

interface ITax {
  //------------------------------------
  calculate(value: number): number;
  //------------------------------------
}

class StandardTax implements ITax {
  calculate(value: number): number {
    return value * 0.15;
  }
}

class ReduceTax implements ITax {
  calculate(value: number): number {
    return (value * value) / 2;
  }
}

class ShoppingCart {
  // -------------------------------------------------------------
  private items: IItemCart[] = [];
  // -------------------------------------------------------------

  addItem(item: IItemCart) {
    this.items.push(item);
  }

  total() {
    return this.items.reduce(
      (total, item) => (total += item.tax.calculate(item.price)),
      // -------------------------------------------------------------

      0
    );
  }
}

const cart = new ShoppingCart();

cart.addItem({
  item: "milk",
  price: 20,
  tax: new StandardTax(),
//   -------------------
});

cart.addItem({
    item: "milk",
    price: 20,
    tax: new ReduceTax(),
    // ------------------
  });

  console.log(cart.total());
  
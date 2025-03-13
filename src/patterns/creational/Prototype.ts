interface Prototype {
  clone(): Prototype;
}

class ConcretePrototype implements Prototype {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    (this._x = x), (this._y = y);
  }

  calculate() {
    console.log(`Calculate result: ${this._x * this._y}`);
  }

  clone(): ConcretePrototype {
    return new ConcretePrototype(this._x, this._y);
  }
}

const concrete = new ConcretePrototype(23, 3);

concrete.calculate();

const concreteClone = concrete.clone();
concreteClone.calculate()

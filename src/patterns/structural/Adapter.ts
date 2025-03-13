interface Flying {
  fly(): void;
  maxSpeed(): number;
}

class Car {
  drive() {
    console.log("I car drive");
  }
  getSpeed() {
    return 130;
  }
}

class AdapterCarToFly<T extends Car> implements Flying {
  car: T;
  constructor(car: T) {
    this.car = car;
  }
  fly(): void {
    this.car.drive();
    console.log("Car that can swim.");
  }
  maxSpeed(): number {
    const speedCar = this.car.getSpeed();
    console.log("Car can drive with ", speedCar);
    return speedCar;
  }
}

const car = new Car();
const flyingCar = new AdapterCarToFly(car);

flyingCar.fly()
flyingCar.maxSpeed()

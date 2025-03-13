class Car {
  color: string;
  seats: number;
  gps: boolean;

  constructor(color = "", seats = 2, gps = false) {
    this.color = color;
    this.seats = seats;
    this.gps = gps;
  }

  showCarInfo() {
    console.log(`
        Color: ${this.color}
        Seats: ${this.seats}
        GPS: ${this.gps ? "sets" : "without"}
        `);
  }
}

interface BuilderCar {
  setColor(color: string): BuilderCar;
  setSeats(seats: number): BuilderCar;
  setGPS(gps: boolean): BuilderCar;
  build(): Car;
}

class ConcreteCarBuilder implements BuilderCar {
  private _color: string = "";
  private _seats: number = 2;
  private _gps: boolean = false;

  setColor(color: string): BuilderCar {
    this._color = color;
    return this;
  }
  setSeats(seats: number): BuilderCar {
    this._seats = seats;
    return this;
  }
  setGPS(gps: boolean): BuilderCar {
    this._gps = gps;
    return this;
  }
  build(): Car {
    return new Car(this._color, this._seats, this._gps);
  }
}

function clientCode() {
  const carBuilder = new ConcreteCarBuilder();
  const car1: Car = carBuilder.setColor("Black").setGPS(true).build();
  const car2: Car = carBuilder
    .setColor("White")
    .setSeats(4)
    .setGPS(true)
    .build();

  car1.showCarInfo();
  car2.showCarInfo();
}

clientCode()

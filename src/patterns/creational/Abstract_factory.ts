interface Car {
  drive(): string;
}

interface SUV {
  driveOffRoad(): string;
}

class SportCar implements Car {
  drive(): string {
    return "I can drive in highway!";
  }
}

class Crossover implements SUV {
  driveOffRoad(): string {
    return "I can drive in off-road!";
  }
}

interface CarFactory {
  createCar(): Car;
  createSUV(): SUV;
}

class SportCarFactory implements CarFactory {
  createCar(): Car {
    return new SportCar();
  }

  createSUV(): SUV {
    throw Error("Cant create crossover in SportCar factory");
  }
}

class CrossoverCarFactory implements CarFactory {
  createCar(): Car {
    throw Error("Cant create SportCar in Crossover factory");
  }

  createSUV(): SUV {
    return new Crossover();
  }
}

function clientCodeWithSportCar(carFactory: CarFactory) {
  const sportCar = carFactory.createCar();
  console.log(sportCar.drive());
}

function clientCodeWithCrossover(carFactory: CarFactory) {
  const crossover = carFactory.createSUV();
  console.log(crossover.driveOffRoad());
}

clientCodeWithSportCar(new SportCarFactory());
clientCodeWithCrossover(new CrossoverCarFactory());

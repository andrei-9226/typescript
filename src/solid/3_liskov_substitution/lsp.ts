class Bird {
  fly() {
    console.log("I can fly!");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("I also can fly!!");
  }
}

class Ostrich extends Bird {
  fly() {
    throw Error('Ostrich can not fly!!')
    // ---------------------------------violation of principle
    // should not violate the behavior of the base class
  }
}

function makeBirdFly(bird: Bird) {
    bird.fly()
}

const birds = [new Bird(), new Sparrow(), new Ostrich()]

birds.forEach(bird => makeBirdFly(bird))
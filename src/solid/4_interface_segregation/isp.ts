interface IEater {
  eat: () => void;
}

interface IFlying {
  fly: () => void;
}

interface ISwimming {
  swim: () => void;
}

class Bird implements IEater, IFlying {
  eat() {
    console.log("Bird can eat");
  }
  fly = () => {
    console.log("Bird can fly");
  };
}

class Duck implements IEater, ISwimming {
  eat() {
    console.log("Duck can eat");
  }
  swim = () => {
    console.log("Duck can swim");
  };
}

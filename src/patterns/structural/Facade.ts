class Light {
  turnOn() {
    console.log("Turn on light!");
  }
  turnOff() {
    console.log("Turn off light!");
  }
}

class SoundSystem {
  turnOn() {
    console.log("Turn on audio!");
  }
  turnOff() {
    console.log("Turn off audio!");
  }
}

class Airconditioner {
  turnOn() {
    console.log("Turn on airconditioner!");
  }
  turnOff() {
    console.log("Turn off airconditioner!");
  }
}

class HomeAutomationFacade {
  constructor(
    private light: Light,
    private sound: SoundSystem,
    private airconditioner: Airconditioner
  ) {}

  wakeUpRoutine() {
    this.light.turnOn();
    this.sound.turnOn();
    this.airconditioner.turnOn();
  }

  sleepRoutine() {
    this.light.turnOff();
    this.sound.turnOff();
    this.airconditioner.turnOff();
  }
}

const homeControl = new HomeAutomationFacade(
  new Light(),
  new SoundSystem(),
  new Airconditioner()
);

homeControl.wakeUpRoutine();
homeControl.sleepRoutine();

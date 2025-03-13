interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log("Turn on light!");
  }

  turnOff() {
    console.log("Turn off light!");
  }
}

class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }
}

class LightOffCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }
}

class RemoteControl {
  private command!: Command;
  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

const light = new Light();
const turnOnLightCommand = new LightOnCommand(light);
const turnOffLightCommand = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOnLightCommand);
remote.pressButton();

remote.setCommand(turnOffLightCommand);
remote.pressButton();


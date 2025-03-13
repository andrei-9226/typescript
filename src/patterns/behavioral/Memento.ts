class Originator {
  constructor(private state: string) {}

  setState(state: string) {
    this.state = state;
    console.log(`Current state: ${this.state}`);
  }

  getState() {
    return this.state;
  }

  saveStateToMemento(): Memento {
    console.log(`Saving state: ${this.state}`);
    return new Memento(this.state);
  }

  restoreStateFromMemento(memento: Memento) {
    this.state = memento.getState();
    console.log(`Restoring state: ${this.state}`);
  }
}

class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

class Caretaker {
  private mementos: Memento[] = [];

  public addMemento(memento: Memento): void {
    this.mementos.push(memento);
  }

  public getMemento(index: number): Memento {
    return this.mementos[index];
  }
}

const originator = new Originator("sate #1");
const caretaker = new Caretaker();

caretaker.addMemento(originator.saveStateToMemento())

originator.setState("State #2"); 
caretaker.addMemento(originator.saveStateToMemento());

originator.setState("State #3");
console.log(`Current State: ${originator.getState()}`); 

originator.restoreStateFromMemento(caretaker.getMemento(0));
console.log(`Current State: ${originator.getState()}`);

originator.restoreStateFromMemento(caretaker.getMemento(1));
console.log(`Current State: ${originator.getState()}`);
interface Observer {
  update(state: string): void;
}

interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  constructor(public state: string) {}

  setState(state: string) {
    this.state = state;
    this.notify();
  }

  attach(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      console.log("Observer already exist");
      return;
    }
    this.observers.push(observer);
    console.log("Observer attached");
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      console.log(`Observer does'nt exist`);
      return;
    }
    this.observers.splice(index, 1);
    console.log("Observer detached");
  }

  notify(): void {
    for (let observer of this.observers) {
      observer.update(this.state);
    }
  }
}

class ObserverA implements Observer {
  update(state: string): void {
    console.log(`Observer A reacts to change state: ${state}`);
  }
}

class ObserverB implements Observer {
  update(state: string): void {
    console.log(`Observer B reacts to change state: ${state}`);
  }
}

const subject = new ConcreteSubject("state #1");
const observer_1 = new ObserverA();
const observer_2 = new ObserverB();

subject.attach(observer_1);
subject.attach(observer_1);
subject.attach(observer_2);

subject.setState("state #2");
subject.setState("state #3");

subject.detach(observer_1);
subject.detach(observer_1);

subject.setState("state #4");

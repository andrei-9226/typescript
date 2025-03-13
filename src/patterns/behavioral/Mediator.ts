interface Mediator {
  notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
  constructor(private componentA: ComponentA, private componentB: ComponentB) {
    this.componentA.setMediator(this);
    this.componentB.setMediator(this);
  }
  notify(sender: object, event: string): void {
    if (sender === this.componentA && event === `A's event`) {
      console.log("Mediator reacts to event A and triggers operation: ");
      this.componentB.doSomething();
      return;
    } else if (sender === this.componentB && event === `B's event`) {
      console.log("Mediator reacts to event B and triggers operation: ");
    //   this.componentA.doSomething();
      return;
    }
  }
}

abstract class Component {
  protected mediator!: Mediator;
  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }
}

class ComponentA extends Component {
  doSomething() {
    console.log("Component A do something");
    this.mediator.notify(this, `A's event`);
  }
}

class ComponentB extends Component {
  doSomething() {
    console.log("Component B do something");
    this.mediator.notify(this, `B's event`);
  }
}

const A = new ComponentA();
const B = new ComponentB();

new ConcreteMediator(A, B);

A.doSomething();
B.doSomething();

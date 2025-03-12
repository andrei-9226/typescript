interface Employee {
  getName(): string;
  getSalary(): number;
  showDetails(indent: string): void;
}

class Developer implements Employee {
  constructor(private name: string, private salary: number) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  showDetails(indent: string): void {
    console.log(`
            ${indent} Developer name:${this.name} Salary: ${this.salary}`);
  }
}

class Manager implements Employee {
  private subordinates: Employee[] = [];
  constructor(private name: string, private salary: number) {}

  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }

  add(employee: Employee) {
    this.subordinates.push(employee);
  }

  remove(employee: Employee) {
    const index = this.subordinates.indexOf(employee);
    if (index > 0) {
      this.subordinates.slice(index, 1);
    }
  }

  showDetails(indent: string): void {
    console.log(`
        ${indent} Manager name:${this.name} Salary: ${this.salary}`);
    for (let subordinate of this.subordinates) {
      subordinate.showDetails(" ");
    }
  }
}

const dev1 = new Developer("John", 1000);
const dev2 = new Developer("Davide", 1200);
const dev3 = new Developer("Eve", 1300);

const manager1 = new Manager("Alice", 1800);
const manager2 = new Manager("Bob", 1800);

manager1.add(dev1);
manager1.add(dev2);
manager2.add(dev3);

const topManager = new Manager("Man", 2000);

topManager.add(manager1);
topManager.add(manager2);

topManager.showDetails(" ");

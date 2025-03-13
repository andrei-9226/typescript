interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

interface Aggregate<T> {
  createIterator(): Iterator<T>;
}

class ConcreteAggregate<T> implements Aggregate<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }

  createIterator(): Iterator<T> {
    return new ConcreteIterator<T>(this);
  }
}

class ConcreteIterator<T> implements Iterator<T> {
  private aggregate: ConcreteAggregate<T>;
  private current: number = 0;

  constructor(aggregate: ConcreteAggregate<T>) {
    this.aggregate = aggregate;
  }

  next(): T | null {
    if (this.hasNext()) {
      return this.aggregate.getItems()[this.current++];
    }
    return null;
  }
  hasNext(): boolean {
    return this.current < this.aggregate.getItems().length;
  }
}

const aggregate = new ConcreteAggregate<number>();

aggregate.add(1);
aggregate.add(2);
aggregate.add(3);

const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
  const item = iterator.next();
  console.log(item);
}

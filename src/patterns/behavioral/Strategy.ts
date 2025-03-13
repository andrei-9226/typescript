interface StrategySort {
  sort<T>(item: T[]): T[];
}

class BubbleSort implements StrategySort {
  sort<T>(item: T[]): T[] {
    console.log("Invoke bubble sort");
    return item;
  }
}

class QuickSort implements StrategySort {
  sort<T>(item: T[]): T[] {
    console.log("Invoke quick sort");
    return item;
  }
}

class Sort {
  strategy: StrategySort;
  constructor(strategy: StrategySort) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: StrategySort) {
    this.strategy = strategy;
  }

  sort<T>(item: T[]): T[] {
    return this.strategy.sort(item);
  }
}

const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c"];

const sorter = new Sort(new BubbleSort());

sorter.sort(arr1);

sorter.setStrategy(new QuickSort());

sorter.sort(arr2);

abstract class Beverage {

    public prepareRecipe(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    protected boilWater(): void {
        console.log("Boiling water...");
    }

    protected pourInCup(): void {
        console.log("Pouring into cup...");
    }

    protected abstract brew(): void;
    protected abstract addCondiments(): void;
}

class Coffee extends Beverage {
    protected brew(): void {
        console.log("Dripping coffee through filter...");
    }

    protected addCondiments(): void {
        console.log("Adding sugar and milk...");
    }
}

class Tea extends Beverage {
    protected brew(): void {
        console.log("Steeping the tea...");
    }

    protected addCondiments(): void {
        console.log("Adding lemon...");
    }
}

const coffee = new Coffee();
console.log("Making coffee:");
coffee.prepareRecipe();

console.log("\nMaking tea:");
const tea = new Tea();
tea.prepareRecipe();
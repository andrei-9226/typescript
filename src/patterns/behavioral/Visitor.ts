interface Animal {
    accept(visitor: AnimalVisitor): void;
}

interface AnimalVisitor {
    visitDog(dog: Dog): void;
    visitCat(cat: Cat): void;
}

class Dog implements Animal {
    public accept(visitor: AnimalVisitor): void {
        visitor.visitDog(this);
    }

    public bark(): string {
        return "Woof!";
    }
}

class Cat implements Animal {
    public accept(visitor: AnimalVisitor): void {
        visitor.visitCat(this);
    }

    public meow(): string {
        return "Meow!";
    }
}

class AnimalFeeder implements AnimalVisitor {
    public visitDog(dog: Dog): void {
        console.log("Feeding the dog.");
    }

    public visitCat(cat: Cat): void {
        console.log("Feeding the cat.");
    }
}

class AnimalSpeaker implements AnimalVisitor {
    public visitDog(dog: Dog): void {
        console.log(dog.bark());
    }

    public visitCat(cat: Cat): void {
        console.log(cat.meow());
    }
}

const dog = new Dog();
const cat = new Cat();

const feeder = new AnimalFeeder();
const speaker = new AnimalSpeaker();

dog.accept(feeder); // "Feeding the dog."
cat.accept(feeder); // "Feeding the cat."

dog.accept(speaker); // "Woof!"
cat.accept(speaker); // "Meow!"
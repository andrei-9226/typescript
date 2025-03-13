class Singleton {
  private static instance: Singleton;
  baseUrl: string = "";

  private constructor() {
    console.log("Singleton created");
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  showBaseUrl() {
    console.log(`Base url: ${this.baseUrl}`);
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);
instance1.showBaseUrl()
instance1.baseUrl = 'new base url'

instance2.showBaseUrl()

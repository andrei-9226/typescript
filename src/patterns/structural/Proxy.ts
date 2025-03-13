interface Image {
  display(): void;
}

class RealImage implements Image {
  constructor(private filename: string) {
    this.loadImageFromDisk();
  }

  loadImageFromDisk() {
    console.log(`Load image: ${this.filename}`);
  }

  display(): void {
    console.log(`Show image: ${this.filename}`);
  }
}

class ProxyImage implements Image {
  private image: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }
  display(): void {
    if (!this.image) {
      this.image = new RealImage(this.filename);
    }
    this.image.display();
  }
}

const image1 = new ProxyImage("image1");
const image2 = new ProxyImage("image2");

image1.display();
image1.display();
image2.display();

interface Page {
  display(): void;
}

class ConcretePage implements Page {
  constructor(public content: string, private sharedStyles: string) {}

  display(): void {
    console.log(`Content: ${this.content} Styles: ${this.sharedStyles}`);
  }
}

class PageFactory {
  private pages: Map<string, ConcretePage> = new Map();

  createPage(content: string, sharedStyles: string): ConcretePage {
    const key = sharedStyles;
    if (!this.pages.has(key)) {
      const newPage = new ConcretePage(content, sharedStyles);
      this.pages.set(key, newPage);
      console.log("Create new page");
      return newPage;
    }
    console.log("Page from cache");
    return this.pages.get(key)!;
  }
}

const pageFactory = new PageFactory();

const page1 = pageFactory.createPage("Content 1", "Styles 1");
const page2 = pageFactory.createPage("Content 2", "Styles 1");
const page3 = pageFactory.createPage("Content 3", "Styles 2");

page1.display();
page2.display();
page3.display();

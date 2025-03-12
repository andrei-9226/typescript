interface IMessage {
  getMessage(): string;
}

class Message implements IMessage {
  constructor(private message: string) {}

  getMessage(): string {
    return this.message;
  }
}

class BoldMessage implements IMessage {
  constructor(private message: IMessage) {}

  getMessage(): string {
    return `<b>${this.message.getMessage()}</b>`;
  }
}

class ItalicMessage implements IMessage {
  constructor(private message: IMessage) {}

  getMessage(): string {
    return `<i>${this.message.getMessage()}</i>`;
  }
}

const message = new Message("Simple message");

const boldMessage = new BoldMessage(message);
const italicMessage = new BoldMessage(message);

console.log(message.getMessage());
console.log(boldMessage.getMessage());
console.log(italicMessage.getMessage());

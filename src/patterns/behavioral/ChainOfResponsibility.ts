interface SupportHandler {
  setNext(handler: SupportHandler): SupportHandler;
  handleRequest(request: Request): void;
}

class Request {
  constructor(public level: number, public message: string) {}
}

class TechnicalSupport implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: Request): void {
    if (request.level === 1) {
      console.log(`Technical support processed request: ${request.message}`);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class ManagerSupport implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: Request): void {
    if (request.level === 2) {
      console.log(`Manager support processed request: ${request.message}`);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

class AdminSupport implements SupportHandler {
  private nextHandler: SupportHandler | null = null;

  setNext(handler: SupportHandler): SupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handleRequest(request: Request): void {
    if (request.level === 3) {
      console.log(`Admin support processed request: ${request.message}`);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    }
  }
}

const technicalSupport = new TechnicalSupport();
const managerSupport = new ManagerSupport();
const adminSupport = new AdminSupport();

technicalSupport.setNext(managerSupport).setNext(adminSupport);

const request1 = new Request(1, "Request 1");
const request2 = new Request(2, "Request 2");
const request3 = new Request(3, "Request 3");

technicalSupport.handleRequest(request1)
technicalSupport.handleRequest(request2)
technicalSupport.handleRequest(request3)

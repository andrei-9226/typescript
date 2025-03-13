type DeliveryConditions = {
  coordinates: {
    x: number;
    y: number;
  };
};

interface Transport {
  deliverySpeed: number;
  delivery: (conditions: DeliveryConditions) => void;
}

class SeaTransport implements Transport {
  deliverySpeed: number;
  constructor(deliverySpeed: number) {
    this.deliverySpeed = deliverySpeed;
  }
  delivery = (conditions: DeliveryConditions) => {
    const {
      coordinates: { x, y },
    } = conditions;
    console.log(
      `Sea transport can delivery cargo in ${x + y / this.deliverySpeed}`
    );
  };
}

class AirTransport implements Transport {
  deliverySpeed: number;
  constructor(deliverySpeed: number) {
    this.deliverySpeed = deliverySpeed;
  }
  delivery = (conditions: DeliveryConditions) => {
    const {
      coordinates: { x, y },
    } = conditions;
    console.log(
      `Air transport can delivery cargo in ${x + y / (this.deliverySpeed * 2)}`
    );
  };
}

abstract class Logistic {
  abstract createTransport(): Transport;

  showInfoDelivery() {
    const transport = this.createTransport();
    console.log(
      " We can delivery your cargo in",
      transport.deliverySpeed,
      " hour"
    );
  }
}

class CreateSeaLogistic extends Logistic {
  createTransport(): Transport {
    return new SeaTransport(3);
  }
}

class CreateAirLogistic extends Logistic {
  createTransport(): Transport {
    return new AirTransport(1);
  }
}

const seaDeliveryLogistic = new CreateSeaLogistic().createTransport();
const airDeliveryLogistic = new CreateAirLogistic().createTransport();

seaDeliveryLogistic.delivery({coordinates: {x: 4, y: 8}})
airDeliveryLogistic.delivery({coordinates: {x: 2, y: 7}})

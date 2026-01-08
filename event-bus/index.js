import { EventEmitter } from "events";

class EventBus extends EventEmitter {
  publish(event) {
    this.emit(event.type, event);
  }

  subscribe(type, handler) {
    this.on(type, handler);
  }
}

export const eventBus = new EventBus();

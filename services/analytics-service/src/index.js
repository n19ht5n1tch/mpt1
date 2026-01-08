import { eventBus } from "../../event-bus/index.js";
import { ORDER_CREATED } from "../../contracts/events/order-events.js";

eventBus.subscribe(ORDER_CREATED, (event) => {
  console.log("Analytics received:", event);
  // later → ClickHouse insert
});

console.log("Analytics service listening to events");

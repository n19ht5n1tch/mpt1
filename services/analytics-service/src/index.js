import express from "express";
import { eventBus } from "../../../event-bus/index.js";
import { ORDER_CREATED } from "../../../contracts/events/order-events.js";

const app = express();

eventBus.subscribe(ORDER_CREATED, (event) => {
  console.log("Analytics received:", event);
  // later → ClickHouse insert
});

app.get("/health", (_, res) => {
  res.json({ service: "analytics", status: "ok" });
});

app.listen(3003, () =>
  console.log("Analytics service running on 3003")
);

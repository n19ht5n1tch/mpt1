import express from "express";
import crypto from "crypto";
import { eventBus } from "../../event-bus/index.js";
import { ORDER_CREATED } from "../../contracts/events/order-events.js";

const app = express();
app.use(express.json());

app.post("/orders", (req, res) => {
  const order = {
    orderId: crypto.randomUUID(),
    userId: req.body.userId,
    amount: req.body.amount,
    timestamp: new Date().toISOString(),
  };

  // 🔥 EMIT EVENT
  eventBus.publish({
    type: ORDER_CREATED,
    ...order,
  });

  res.status(201).json(order);
});

app.listen(3002, () =>
  console.log("Order service running on 3002")
);

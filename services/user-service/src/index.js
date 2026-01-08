import express from "express";

// --- CHANGE THIS SECTION ---
// Old causing error: import { eventBus } from "../../../event-bus/index.js";
import eventBusPkg from "../../../event-bus/index.js";
const { eventBus } = eventBusPkg;
// ---------------------------

import { ORDER_CREATED } from "../../../contracts/events/order-events.js";

const app = express();
app.use(express.json());

eventBus.subscribe(ORDER_CREATED, (event) => {
  console.log("User Service received event:", event);
});

app.get("/health", (_, res) =>
  res.json({ service: "user", status: "ok" })
);

app.listen(3001, () =>
  console.log("User service running on 3001")
);
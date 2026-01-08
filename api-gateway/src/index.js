import express from "express";

const app = express();
app.use(express.json());

// Proxy: user service
app.use("/users", async (req, res) => {
  const r = await fetch("http://localhost:3001" + req.url, {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined
  });
  res.status(r.status).json(await r.json());
});

// health
app.get("/health", (_, res) => {
  res.json({ gateway: "ok" });
});

app.listen(3000, () =>
  console.log("API Gateway running on 3000")
);


const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, service: "orders" }));

app.get("/orders", (req, res) => {
  res.json([{ id: "ORD-1", total: 1200 }, { id: "ORD-2", total: 500 },{ id:"ORD-3", total: 1200 }, { id: "ORD-4", total: 500 },{ id:"ORD-5", total: 1200 }, { id: "ORD-6", total: 500 }]);
});

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`orders-service running on :${port}`));

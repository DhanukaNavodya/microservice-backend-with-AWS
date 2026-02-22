
const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, service: "users" }));

app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`users-service running on :${port}`));

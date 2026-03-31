const express = require("express");
const app = express();
app.use(express.json());

const tools = [];

app.get("/mcp", (req, res) => {
  res.json({ name: "mcp-server", version: "1.0.0", tools });
});

app.post("/mcp", (req, res) => {
  const { method, params } = req.body;
  if (method === "tools/list") {
    return res.json({ result: { tools } });
  }
  res.status(404).json({ error: "Method not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MCP server running on port ${PORT}`));

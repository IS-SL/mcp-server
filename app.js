const express = require('express');

const app = express();
app.use(express.json());

app.post('/mcp', (req, res) => {
  res.json({
    tools: [
      {
        name: "hello_tool",
        description: "Test MCP tool",
        input_schema: {
          type: "object",
          properties: {
            name: { type: "string" }
          },
          required: ["name"]
        }
      }
    ]
  });
});

app.post('/tools/hello_tool', (req, res) => {
  const { name } = req.body;
  res.json({
    result: `Hello ${name}, MCP is working`
  });
});

app.get('/', (req, res) => {
  res.send('MCP server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

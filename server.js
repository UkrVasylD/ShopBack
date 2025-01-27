const express = require("express");
const app = express();
const port = 3030;

// Middleware for parsing JSON requests
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Example Route for API
app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
});

// Example Route to Handle Post Requests
app.post("/api/message", (req, res) => {
  const { message } = req.body;
  res.send(`Message received: ${message}`);
});

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

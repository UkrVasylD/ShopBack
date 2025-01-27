const express = require("express");
const app = express();
const port = 3030;

const router = require("./routes/index");

// Middleware for parsing JSON requests
app.use(express.json());

app.use(router);

// Start the Server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

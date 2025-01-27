const express = require("express");
const router = express.Router();

const productsRouter = require("./products");
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", function (req, res) {
  res.send("Birds home page");
});
// define the about route
router.get("/about", function (req, res) {
  res.send("About birds");
});

// Example Route for API
router.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  res.json(users);
});

// Example Route to Handle Post Requests
router.post("/api/message", (req, res) => {
  const { message } = req.body;
  res.send(`Message received: ${message}`);
});

router.use("/products", productsRouter);

module.exports = router;

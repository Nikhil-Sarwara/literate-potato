const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET route
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// POST route
app.post("/data", (req, res) => {
  const data = req.body;
  res.json({
    message: "Data received successfully",
    receivedData: data,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

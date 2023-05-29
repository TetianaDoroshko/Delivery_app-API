const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const { productsRouter, ordersRouter } = require("./src/routes");

const app = express();

const corsOptions = {
  origin: "https://tetianadoroshko.github.io" || "http://localhost:3001",
  optionsSuccessStatus: 200,
};

app.use(express.json(corsOptions));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API works" });
});

app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Database connection successful on port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(`Database connection was failed. ${error.message}`);
    process.exit(1);
  });

const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;
const cors = require("cors");
const morgan = require("morgan");

app.use(
  express.json(),
  cors(),
  morgan(":method :url :status :response-time ms")
);

const carsRouter = require("../routes/carsRouter");
app.use("/cars", carsRouter);

app.listen(PORT, console.log(`Server running at Port: ${PORT}`));

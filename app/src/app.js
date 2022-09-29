const express = require("express");
const app = express();
const { PORT } = require("dotenv").config().parsed;

app.use(express.json());

const carsRouter = require("../routes/carsRouter");
app.use(carsRouter);

app.listen(PORT, console.log(`Server running at Port: ${PORT}`));

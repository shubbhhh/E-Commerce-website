const express = require("express");
const cors = require("cors");
const { apiRouter } = require("./routes/index");

const App = express();

App.use(cors());
App.use(express.json());
App.use("/brandname", apiRouter);


App.listen(3000);
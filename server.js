const bodyParser = require("body-parser");
const { mongoose } = require("./db");
const book = require("./Controller/BookController");

const express = require("express");
const app = express();

//added middleware code
app.use(bodyParser.json());
app.use("/books", book);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening at port :${port}`);
});
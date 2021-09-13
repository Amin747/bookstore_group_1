const mongoose = require("mongoose");

var Book = mongoose.model("Book", 
{
  iso: String,
  title: String,
  author: String
  });
module.exports = { Book };
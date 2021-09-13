const express = require("express");
const { Book } = require("../Models/Book");

const router = express.Router();

let ObjectId = require("mongoose").Types.ObjectId;

//GET http://localhost:3000/books
router.get("/", (req, resp) => {
  Book.find((err, docs) => {
    if (err)
      console.log(
        "Error while getting books..." + JSON.stringify(err, undefined, 2)
      );
    else resp.send(docs);
  });
});

//GET http://localhost:3000/books/id
router.get("/:id", (req, resp) => {
  let bookId = req.params.id;
  if (!ObjectId.isValid(bookId))
    return resp.status(400).send(`Book not found for id :${bookId}`);

  Book.findById(bookId, (err, docs) => {
    if (err)
      console.log(
        "Error while getting books..." + JSON.stringify(err, undefined, 2)
      );
    else resp.send(docs);
  });
});

//DELETE http://localhost:3000/books/id
router.delete("/:id", (req, resp) => {
  let bookId = req.params.id;
  if (!ObjectId.isValid(bookId))
    return resp.status(400).send(`book not found for id :${bookId}`);

  Book.deleteOne({ _id: bookId }, (err, docs) => {
    if (err)
      console.log(
        "Error while deleting books..." + JSON.stringify(err, undefined, 2)
      );
    else resp.send(docs);
  });
});

//PUT http://localhost:3000/books/id
router.put("/:id", (req, resp) => {
  let bookId = req.params.id;
  if (!ObjectId.isValid(bookId))
    return resp.status(400).send(`book not found for id :${bookId}`);

  Book.findByIdAndUpdate(
    bookId,
    {
      $set: {
        iso: req.body.iso,
        title: req.body.title,
        author: req.body.author,
      }
    },
    { new: true, useFindAndModify: false },
    (err, doc) => {
      if (err)
        console.log(
          "Error while uppdating books..." +
            JSON.stringify(err, undefined, 2)
        );
      else resp.send(doc);
    }
  );
});

//POST http://localhost:3000/books
router.post("/", (req, resp) => {
  let bok = new Book({
        iso: req.body.iso,
        title: req.body.title,
        author: req.body.author
  });
  bok.save((err, doc) => {
    if (err)
      console.log(
        "error in saving books..." + JSON.stringify(err, undefined, 2)
      );
    else resp.send(doc);
  });
});

module.exports = router;
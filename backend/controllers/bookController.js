const Book = require("../models/bookModel");

const createBook = async (req, res) => {
  const newBook = new Book(req.body);
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(500).send({
        message: "Send all required fields: title, author and publishYear",
      });
    } else {
      let savedBook = await newBook.save();
      res.status(200).json(savedBook);
    }
  } catch (error) {
    throw error;
  }
};

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (error) {
    throw error;
  }
};

const getOneBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (error) {
    throw error;
  }
};

const updateBook = async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateBook);
  } catch (error) {
    throw error;
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).send({ Message: "Book deleted Successfully" });
  } catch (error) {
    throw error
  }
};

module.exports = { createBook, getAllBooks, getOneBook, updateBook, deleteBook };

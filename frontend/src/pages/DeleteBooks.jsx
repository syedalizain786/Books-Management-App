import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const { id } = useParams(); // Assuming your route includes a book ID parameter
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  const fetchBookDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/books/${id}`);
      setBook(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const handleDeleteBook = async () => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        book && (
          <div className="flex flex-col border-2 border-sky-600 rounded-xl w-[600px] p-4 mx-auto">
            <p className="text-xl my-4">
              Are you sure you want to delete "{book.title}" by {book.author}?
            </p>
            <div className="flex justify-between">
              <button
                className="p-2 bg-red-500 text-white w-[45%]"
                onClick={handleDeleteBook}
              >
                Delete
              </button>
              <button
                className="p-2 bg-green-500 text-white w-[45%]"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default DeleteBook;

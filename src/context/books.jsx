import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BookContext = createContext();

// create a component that will provide value to the children
// so many values to share, hence we made a provider component

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  // fetch all the books
  // It will run only once
  const fetchBooks = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    } catch (error) {
      console.log("An error occurred: ", error.message);
    }
  }, []);

  const createBook = async (title) => {
    /// post book to the server
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([
      ...books,
      response.data, // new book bcz response is an object
    ]);
  };

  const editBookById = async (newTitle, id) => {
    // put request
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    //use the response
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...response.data };
      }
      return book; // for other books
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete("http://localhost:3001/books/" + id);
    // crucial part
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchBooks,
    createBook,
    editBookById,
    deleteBookById,
  };

  return (
    <BookContext.Provider value={valueToShare}>{children}</BookContext.Provider>
  );
}

export { Provider };
export default BookContext;

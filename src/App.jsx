import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

//todo: store all the books that has been created by BookCreate and pass them to BookList

function App() {
  // use state for storing the book object in Array
  const [books, setBooks] = useState([]);

  // fetch all the books
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []); //runs on first render

  const createBook = async (title) => {
    /// post book to the server
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([
      ...books,
      response.data, // new book
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
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete("http://localhost:3001/books/" + id);
    // crucial part
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <>
      <header>
        <h1>Book List Project</h1>
      </header>
      <article>
        <BookCreate onCreate={createBook} />
      </article>
      <h3>Reading list</h3>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
    </>
  );
}

export default App;

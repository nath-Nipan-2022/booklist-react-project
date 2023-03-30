import React, { useState } from "react";
import useBookContext from "../hooks/useBookContext";

const BookEdit = ({ book, onSubmit }) => {
  // default state = book.title;
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBookContext();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBookById(title, book.id);
  };

  return (
    <form className={"book-edit slide-up"} onSubmit={handleSubmit}>
      <label htmlFor="edit">Title</label>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="edit"
        autoFocus
      />
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
};

export default BookEdit;

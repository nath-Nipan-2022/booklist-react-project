import React from "react";
import BookShow from "./BookShow";

//todo: render Bookshow components by mapping through [books array]

// always destructure the props object before using them
const BookList = ({ books, onDelete, onEdit }) => {
  const renderBookList = () =>
    books.map((book) => (
      <BookShow book={book} onDelete={onDelete} onEdit={onEdit} key={book.id} />
    ));

  return <div className="book-list">{renderBookList()}</div>;
};

export default BookList;

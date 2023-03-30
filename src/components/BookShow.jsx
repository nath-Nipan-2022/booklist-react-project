import React, { useState } from "react";
import useBookContext from "../hooks/useBookContext";
import BookEdit from "./BookEdit";

//todo: show the book that has been created by user

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBookContext();

  // let the parent control whether to show bookEdit or not
  const handleSubmit = () => {
    setShowEdit(false); // close BookEdit Component
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); // toggle showEdit && <BookEdit/>
  };

  const handleDeleteClick = () => {
    confirm(`Book will be deleted`) && deleteBookById(book.id);
  };

  // coditional rendering
  let content = "";
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book">
      <button onClick={handleDeleteClick} className="delete">
        X
      </button>
      <button onClick={handleEditClick} className="edit">
        EDIT
      </button>
      <figure>
        <img
          src={`https://picsum.photos/seed/${book.id}/300/200`} // generate random image from picsum website
          alt="book cover"
        />
      </figure>
      <h4 className="title">{book.title}</h4>
      {/* for book edit */}
      <div>{content}</div>
    </div>
  );
};

export default BookShow;

import React, { useState } from "react";
import BookEdit from "./BookEdit";

//todo: show the book that has been created by user

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  // let the parent control whether to show bookEdit or not
  const handleSubmit = (title, id) => {
    setShowEdit(false); // close BookEdit Component
    onEdit(title, id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit); // toggle showEdit && <BookEdit/>
  };
  const handleDeleteClick = () => {
    confirm(`Book will be deleted`) && onDelete(book.id);
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
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`} // generate random image from picsum website
        alt="book cover"
      />
      <h4 className="title">{book.title}</h4>
      {/* for book edit */}
      <div>{content}</div>
    </div>
  );
};

export default BookShow;

import React, { useState } from "react";

//todo: taking input from user , passing to the parent!

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      onCreate(title); // pass the title to the parent
      setTitle(""); // empty the input field
    }
  };

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder={"Type a Book Title"}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;

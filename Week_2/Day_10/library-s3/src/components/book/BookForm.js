import React, { useState, useEffect } from "react";
import { Book } from "../../models/Book";

export default function BookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onBookFormSubmit(e) {
    e.preventDefault();
  
    if (!isValid()) return;
  
    let book;
    if (props.bookToEdit) {
      book = new Book(props.bookToEdit.id, title, author, isbn);
      props.onBookEdit(book);
    } else {
      book = new Book(null, title, author, isbn);
      props.onBookCreated(book);
    }
    clearInputs();
  }
  
  
  
  function isValid() {
    return title !== "" && author !== "" && isbn !== "";
  }

  function clearInputs() {
    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  return (
    <div>
      <h1>Library Books:</h1>
      <form id="form" onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            id="title-input"
            className="form-control"
            placeholder="Enter book title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            id="author-input"
            className="form-control"
            placeholder="Enter author here"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">#ISBN</label>
          <input
            type="text"
            id="isbn-input"
            className="form-control"
            placeholder="Enter book ISBN here"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>
        <div class="d-grid mt-4">
          <button class="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}

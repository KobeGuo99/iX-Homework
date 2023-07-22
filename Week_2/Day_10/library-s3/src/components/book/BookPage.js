
import BookForm from "./BookForm";
import BookTable from "./BookTable";
import {React, useState, useEffect } from "react";
import BookService from "../../services/book-service";

export default function BookPage() {
    const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (!books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreated(book) {
    const newBook = await BookService.createBook(book);
    setBookToEdit(null);
    setBooks([...books, newBook]);
  }

  async function onBookDelete(book) {
    await BookService.deleteBook(book.id);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  async function onBookEditInitiate(book) {
    setBookToEdit(book);
  }

  async function onBookEdit(book) {
    const updatedBook = await BookService.updateBook(book);
    setBookToEdit(null);
    setBooks(
      books.map((b) => {
        return b.id === book.id ? updatedBook : b;
      })
    );
  }
  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm
          onBookCreated={onBookCreated}
          onBookEdit={onBookEdit}
          bookToEdit={bookToEdit}
        />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEditInitiate={onBookEditInitiate}
        />
      </div>
    </div>
  )
}

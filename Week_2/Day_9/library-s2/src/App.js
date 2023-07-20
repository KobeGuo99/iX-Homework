import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookForm from "./components/BookForm";
import BookTable from "./components/BookTable";
import { useState, useEffect } from "react";
import BookService from "./services/book-service";

function App() {
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
    newBook.id = newBook.id; 
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
        return b.isbn === book.isbn ? updatedBook : b;
      })
    );
  }
  
  

  return (
    <div className="m-5">
      <div className="card p-4">
        <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit} />
        <BookTable
          books={books}
          onBookDelete={onBookDelete}
          onBookEdit={onBookEdit}
        />
      </div>
    </div>
  );
}

export default App;

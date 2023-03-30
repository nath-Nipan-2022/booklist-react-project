import { useEffect } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

import useBookContext from "./hooks/useBookContext";
//todo: store all the books that has been created by BookCreate and pass them to BookList

function App() {
  // use state for storing the book object in Array
  const { fetchBooks } = useBookContext();

  useEffect(() => {
    fetchBooks();
    /* Q: Why we see 2 request on Network Tab?
    since fetchBooks is called - 
    1. Provider Component will rerender again
    2. Provider will also effect App component
    3. App will again call fetchBooks 
    4. But [] prevents further rerendering
    5. That's why we see 👀 2 requests in Network Tab on Browser
    */
  }, []); //runs on first render

  return (
    <>
      <div className="book-create">
        <header>
          <h1>Book List Project</h1>
        </header>
        <article>
          <BookCreate />
        </article>
      </div>
      <div className="contents">
        <h3>Reading list</h3>
        <BookList />
      </div>
    </>
  );
}

export default App;

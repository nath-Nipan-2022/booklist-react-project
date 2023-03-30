import useBookContext from "../hooks/useBookContext";
import BookShow from "./BookShow";

//todo: render Bookshow components by mapping through [books array]

// always destructure the props object before using them
const BookList = () => {
  const { books } = useBookContext();

  const renderBookList = () =>
    //note we also use props, it's common
    books.map((book) => <BookShow book={book} key={book.id} />);

  return <div className="book-list">{renderBookList()}</div>;
};

export default BookList;

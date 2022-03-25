import React from "react";
import "./Book.css";
const Book = (props) => {
  const { book } = props;
  console.log(book);
  return (
    <div className="single-book">
      <img src={book.img} alt="" />
        <h3>{book.name}</h3>
      <div className="info">
        <p>প্রকাশকঃ {book.publications}</p>
        <p>বিভাগঃ {book.category}</p>
        <p><strong>মূল্যঃ {book.price} টাকা</strong></p>
        <p>রেটিংঃ {book.ratings}</p>
      </div>
      <button>Add to cart</button>
    </div>
  );
};

export default Book;

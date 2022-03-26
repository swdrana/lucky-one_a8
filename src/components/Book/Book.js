import React from "react";
import "./Book.css";
const Book = (props) => {
  //destructuring object
  const { book, addToCart } = props;
  // console.log(addToCart);

  return (
    <div className="single-book">
      <img src={book.img} alt="" />

      {/* show book info from api / json */}
      <div className="info">
        <h3>{book.name}</h3>
        <p>প্রকাশকঃ {book.publications}</p>
        <p>বিভাগঃ {book.category}</p>
        <p>
          <strong>মূল্যঃ {book.price} টাকা</strong>
        </p>
        <p>রেটিংঃ {book.ratings}</p>
        {/* button with font awesome icon */}
        <button onClick={() => addToCart(book)}>
          Add to cart {`  `}
          <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Book;

import React, { useState } from "react";
import CartInfo from "../CartInfo/CartInfo";
import "./Cart.css";
const Cart = (props) => {
  //destructuring props
  const { insideCart, clearCart} = props;
  
  //create random
  const [random, setRandom] = useState(0);
  const choseRandomly = () => {
    setRandom(Math.floor(Math.random() * insideCart.length));

    //when cart is empty
    if (insideCart[0] === undefined) {
      setRandomBook("");
    }

    //when cart have at least one product
    if (insideCart[0]) {
      setRandomBook(insideCart[random].name);
    }
  };
  
  //show random book name to ui
  const [randomBook, setRandomBook] = useState("");
  return (
    <div className="cart">
      <h3>Selected Item: {insideCart.length} Out of 4</h3>
      {insideCart.map((aCart) => (
        <CartInfo key={Math.random()} aCart={aCart}></CartInfo>
      ))}
      <h3>Randomly Chosen</h3>
      <p className="random-book-name">{randomBook}</p>
      
      <div className="btn-group">
        <button onClick={() => choseRandomly()} className="btn-random">
          Chose Randomly <i className="fa fa-random" aria-hidden="true"></i>
        </button>
        <button onClick={() => clearCart()} className="btn-clear">
          Clear Cart <i className="fa fa-times-circle-o" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;

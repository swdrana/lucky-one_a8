import React, { useState } from "react";
import CartInfo from "../CartInfo/CartInfo";
import "./Cart.css";
const Cart = (props) => {
  const { insideCart } = props;

  //create random
  const [random, setRandom] = useState(0);
  const choseRandomly = () => {
    setRandom(Math.floor(Math.random() * insideCart.length ));
    if(insideCart[0]){
      setRandomBook(insideCart[random].name);
    }
  };
  //show random book name to ui
  const [randomBook, setRandomBook] = useState('');
  return (
    <div className="cart">
      <h3>Selected Item: {insideCart.length}</h3>
      {insideCart.map((aCart) => (
        <CartInfo key={aCart.id} aCart={aCart}></CartInfo>
      ))}
      <h3>Randomly Chosen</h3>
      <p className="random-book-name">{randomBook}</p>
      <button onClick={()=>choseRandomly()} className="btn-random">Chose Randomly</button>
    </div>
  );
};

export default Cart;

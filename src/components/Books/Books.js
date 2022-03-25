import React from 'react';
import Book from '../Book/Book';
import './Books.css'
const Books = (props) => {
    const {books}=props;
    console.log(books);
    return (
        <div>
            {books.map(book=>{
                return <Book></Book>
            })}
        </div>
    );
};

export default Books;
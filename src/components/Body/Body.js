import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Body.css'
const Body = () => {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    // console.log(books);
    return (
        <div>
            <Books books={books}></Books>
        </div>
    );
};

export default Body;
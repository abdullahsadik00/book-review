import React, { useEffect, useState } from 'react'
import BookCard from '../BookCard/BookCard'
import Header from '../Header/Header'

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("book.json")
        .then((res) => res.json())
        .then((parsedJson) => {
          setBooks(parsedJson);
          console.log(books)
        });
    }, []);
  
    return (
      <div className="container">
        <Header />
        <div className="row">
          {books.map((book, i) => (
            <div className="col-md-3">
              <BookCard key={i} data={book} />
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Home
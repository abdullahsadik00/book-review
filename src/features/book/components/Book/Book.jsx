import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Header from "../Header/Header";

const Book = () => {
  const [data, setData] = useState({});
  const [book, setBook] = useState({});
  const { bookTitle } = useParams();
  console.log("im here")
  useEffect(() => {
    console.log("im here too")
    fetch("book.json")

      .then((res) => {
        // console.log(res)
        res.json()})
      .then((parsedJson) => {
        console.log("im here too too")
        setData(parsedJson);
        console.log(data)
      });
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="card book-card container">
        <h5 className="card-title">{book.title}</h5>
        <img src={book.imageLink} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <p>
            <span className="data-title">Author:</span> {book.author}
          </p>
          <p>
            <span className="data-title">Language:</span> {book.language}
          </p>
          <div className="data-container">
            <p>
              <span className="data-title">Year:</span> {book.year}
            </p>
            <p>
              <span className="data-title">Pages:</span> {book.pages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

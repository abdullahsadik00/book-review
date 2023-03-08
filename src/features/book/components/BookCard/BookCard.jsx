import React from "react";

const BookCard = (props) => {
  const book = props.data;
  return (
    <div className="card">
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
  );
};

export default BookCard;

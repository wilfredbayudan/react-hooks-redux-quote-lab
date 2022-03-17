import React from "react";
import QuoteCard from "./QuoteCard";
import { useDispatch, useSelector } from "react-redux";

function Quotes() {
  const quotes = useSelector((state) => state.quotes);
  // const dispatch = useDispatch();

  // const handleUpvote = (quoteId) => {
  //   dispatch(upvoteQuote(quoteId));
  // };

  // const handleDownvote = (quoteId) => {
  //   dispatch(downvoteQuote(quoteId));
  // };

  // const handleRemove = (quoteId) => {
  //   dispatch(removeQuote(quoteId));
  // };

  console.log(quotes);

  const renderQuotes = quotes.map((quote, index) => {
    return <QuoteCard key={index} quote={quote} />;
  });

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">{renderQuotes}</div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;

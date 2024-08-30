import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchase_book, trade_book } from "./BookAction";

const BookContainer = () => {
  const noOfBooks = useSelector((state) => state.NumberOfBooks);
  const dispatch = useDispatch();
  return (
    <>
      <h2>BookContainer</h2>
      <h2>No of Books: {noOfBooks}</h2>
      <button onClick={() => dispatch(purchase_book())}>Buy Book</button>
      <button onClick={() => dispatch(trade_book())}>Sell Book</button>
    </>
  );
};

export default BookContainer;

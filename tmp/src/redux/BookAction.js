import { buy_book, sale_book } from "./BookTypes";

export const purchase_book = () => {
  return {
    type: buy_book,
  };
};

export const trade_book = () => {
  return {
    type: sale_book,
  };
};

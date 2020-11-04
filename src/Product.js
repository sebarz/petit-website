import React, { useEffect } from "react";
import "./Product.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./CartContext";
import { ADD_TO_BASKET, getAmount } from "./reducer";
import CurrencyFormat from "react-currency-format";

const Product = ({ title, description, price, img, id }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        description: description,
        price: price,
        img: img,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <h1>{title}</h1>
        <p>{description}</p>
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <strong>{value} COP</strong>}
        />
      </div>
      <button onClick={addToBasket}>
        <ShoppingCartIcon></ShoppingCartIcon>
      </button>
      <img src={`/images/${img}`} alt="" />
    </div>
  );
};

export default Product;

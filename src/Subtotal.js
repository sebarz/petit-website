import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./CartContext";
import { getSubtotal } from "./reducer";
import "./Subtotal.scss";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => <h3> Your subtotal is: {value} COP</h3>}
      />
      <button>Continuar compra</button>
    </div>
  );
};

export default Subtotal;

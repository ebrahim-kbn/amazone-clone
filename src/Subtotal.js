import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const getBasketTotal = (basket) => {
    return basket.reduce((a, c) => a + c.price, 0);
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
            <br />
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <br />
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;

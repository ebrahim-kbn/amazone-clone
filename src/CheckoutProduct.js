import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function CheckoutProduct({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    console.log(id);
    dispatch({ type: actionTypes.REMOVE_FROM_BASKET, payload: id });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}> &#9734;</p>
            ))}
        </div>
        <button onClick={() => removeFromBasket(id)}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

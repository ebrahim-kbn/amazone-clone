import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Product({ id, image, title, price, rating }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      payload: { id, image, title, price, rating },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}> &#9734;</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

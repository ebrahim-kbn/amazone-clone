import React from "react";

export const initialState = {
  user: null,
  basket: [
    // {
    //   id: 13242442,
    //   image:
    //     "https://images-na.ssl-images-amazon.com/images/I/419MqI3z2DL._AC_SY200_.jpg",
    //   price: 135.65,
    //   rating: 5,
    //   title:
    //     "ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD, Intel Core i3-8145U CPU, 8GB RAM, 128GB SSD, Windows 10 in S Mode, F512FA-AB34, Slate Gray",
    // },
  ],
};
export const actionTypes = {
  SET_USER: "SET_USER",
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case actionTypes.REMOVE_FROM_BASKET:
      // let newBasket = [...state.basket];
      // const index=
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;

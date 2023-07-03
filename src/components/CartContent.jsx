/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../App.css";
import { useDispatch } from "react-redux";
import { displayCartContent, deleteFromCart } from "../features/storeSlice";
import CloseButton from "../assets/IconCloseSharp";

export default function CartContent({ displayCart, cart, grandTotal }) {
  const dispatch = useDispatch();

  const toggleDisplay = () => {
    dispatch(displayCartContent());
  };

  const removeFromCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  return (
    <div
      className="cart-content"
      style={
        displayCart
          ? { height: "90%", width: "300px" }
          : { height: "90%", width: "0" }
      }
    >
      <div className="close-button">
        <CloseButton
          style={
            displayCart
              ? { width: "35px", height: "35px", padding: "10" }
              : { width: "0", height: "0", padding: "0" }
          }
          onClick={() => toggleDisplay()}
        />
      </div>
      {Object.keys(cart).length === 0 ? (
        <div
          className="cart-message"
          style={displayCart ? { opacity: 1 } : { opacity: 0 }}
        >
          Your cart is empty.
        </div>
      ) : (
        <div>
          {Object.entries(cart).map((array) => {
            if (array[1].length < 2) {
              const currProduct = array[1][0];
              return (
                <div key={currProduct.uuid}>
                  <div
                    className="cart-product-card"
                    style={displayCart ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <img
                      src={currProduct.image}
                      className="cart-product-image"
                    />
                    <div className="cart-product-title">
                      {currProduct.title}
                    </div>
                    <div className="cart-product-price">
                      {currProduct.price}
                    </div>
                    <div className="cart-product-quantity">
                      Quantity: {array[1].length}
                    </div>
                    <button onClick={() => removeFromCart(currProduct)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            } else {
              const currProduct = array[1][0];
              return (
                <div key={currProduct.uuid}>
                  <div
                    className="cart-product-card"
                    style={displayCart ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <img
                      src={currProduct.image}
                      className="cart-product-image"
                    />
                    <div className="cart-product-title">
                      {currProduct.title}
                    </div>
                    <div className="cart-product-price">
                      {currProduct.price}
                    </div>
                    <div className="cart-product-quantity">
                      Quantity: {array[1].length}
                    </div>
                    <button onClick={() => removeFromCart(currProduct)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            }
          })}
          <div className="cart-total">
            Your Total is: {grandTotal.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}

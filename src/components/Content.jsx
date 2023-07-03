/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import ShoppingCart from "../assets/IconShoppingCart";
import { useDispatch } from "react-redux";
import {
  displayCartContent,
  addToCart,
  selectProduct,
  showModal,
} from "../features/storeSlice";
import LoadingIcon from "../assets/IconBxLoaderAlt";

export default function Content({ content, loading, cart, count }) {
  const dispatch = useDispatch();

  const showCart = () => {
    dispatch(displayCartContent());
  };

  const addProduct = (product) => {
    dispatch(addToCart(product));
  };

  const selectCurrProduct = (product) => {
    dispatch(selectProduct(product));
    dispatch(showModal());
  };

  return (
    <div className="main">
      <div className="shopping-cart-container">
        <div
          className="shopping-cart-count"
          style={
            Object.keys(cart).length === 0
              ? { background: "none" }
              : { background: "red" }
          }
        >
          {count ? count : ""}
        </div>
        <button className="shopping-cart">
          <ShoppingCart width="40px" height="40px" onClick={() => showCart()} />
        </button>
      </div>

      {loading ? (
        <div>
          <LoadingIcon
            style={{ animation: "rotate 1s linear infinite" }}
            width={100}
            height={100}
          />
          <p>One moment...</p>
        </div>
      ) : content.length ? (
        content?.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.image}
              className="product-image"
              onClick={() => selectCurrProduct(item)}
            />

            <div
              className="product-title"
              onClick={() => selectCurrProduct(item)}
            >
              {item.title}{" "}
            </div>

            <div className="product-price">${item.price}</div>

            <div className="product-rating">
              {item.rating.rate}{" "}
              <span className="product-rating-count">
                ({item.rating.count})
              </span>
            </div>

            <button className="add-button" onClick={() => addProduct(item)}>
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <div>Home Page</div>
      )}
    </div>
  );
}

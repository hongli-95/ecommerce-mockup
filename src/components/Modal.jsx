/* eslint-disable react/prop-types */
import "../App.css";
import { useDispatch } from "react-redux";
import CloseButton from "../assets/IconCloseSharp";
import { hideModal, addToCart } from "../features/storeSlice";

export default function Modal({ displayModal, product }) {
  const dispatch = useDispatch();

  const hideModalOnClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      dispatch(hideModal());
    }
  };

  return (
    <div
      className="backdrop"
      style={displayModal ? { height: "100%" } : { height: "0" }}
      onClick={(e) => hideModalOnClick(e)}
    >
      <dialog
        className="product-modal"
        style={
          displayModal ? { height: "70%" } : { height: "0", border: "none" }
        }
      >
        <div className="close-button">
          <CloseButton
            onClick={() => dispatch(hideModal())}
            style={
              displayModal
                ? { width: "35px", height: "35px", padding: "10" }
                : { width: "0", height: "0", padding: "0" }
            }
          />
        </div>

        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="modal-product-info">
          <p className="modal-product-title">{product.title}</p>
          <p className="modal-product-category">{product.category}</p>
          <p className="modal-product-description">{product.description}</p>
          <p className="modal-product-price">${product.price}</p>
        </div>

        <div className="button-container">
          <button
            className="add-button"
            onClick={() => dispatch(addToCart(product))}
            style={displayModal ? { width: "50%" } : { width: "0" }}
          >
            Add to Cart
          </button>
        </div>
      </dialog>
    </div>
  );
}

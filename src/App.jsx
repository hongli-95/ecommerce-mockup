/* eslint-disable no-unused-vars */
import "./App.css";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import CartContent from "./components/CartContent";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";
import { useRef } from "react";

function App() {
  const {
    products,
    isLoading,
    cart,
    displayCart,
    displayModal,
    currSelectedProduct,
    count,
    grandTotal,
  } = useSelector((state) => state.store);

  return (
    <div>
      <Navbar />
      <CartContent
        displayCart={displayCart}
        cart={cart}
        grandTotal={grandTotal}
      />
      <Content
        content={products}
        loading={isLoading}
        cart={cart}
        count={count}
      />
      <Modal displayModal={displayModal} product={currSelectedProduct} />
    </div>
  );
}

export default App;

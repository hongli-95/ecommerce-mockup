/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import {
  getElectronicsProducts,
  getJeweleryProducts,
  getMenProducts,
  getWomenProducts,
  backToHome,
} from "../features/storeSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    switch (e.target.innerText) {
      case "Women's Clothing":
        dispatch(getWomenProducts());
        break;
      case "Men's Clothing":
        dispatch(getMenProducts());
        break;
      case "Jewelery":
        dispatch(getJeweleryProducts());
        break;
      case "Electronics":
        dispatch(getElectronicsProducts());
        break;
      case "Home":
        dispatch(backToHome());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="navbar">
        <button className="nav-button" onClick={handleClick}>
          Home
        </button>
        <button className="nav-button" onClick={handleClick}>
          Women's Clothing
        </button>
        <button className="nav-button" onClick={handleClick}>
          Men's Clothing
        </button>
        <button className="nav-button" onClick={handleClick}>
          Jewelery
        </button>
        <button className="nav-button" onClick={handleClick}>
          Electronics
        </button>
      </div>
    </>
  );
}

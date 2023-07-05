/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "../App.css";
import { useDispatch } from "react-redux";
import {
  getElectronicsProducts,
  getJeweleryProducts,
  getMenProducts,
  getWomenProducts,
} from "../features/storeSlice";

import femaleModel from "../images/female-model-min.jpg";
import maleModel from "../images/male-model-min.jpg";
import phonePic from "../images/green-iphone-min.jpg";
import jeweleryPic from "../images/jewelery-min.jpg";

export default function HomePage() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target.classList.contains("home-women")) {
      dispatch(getWomenProducts());
    } else if (e.target.classList.contains("home-men")) {
      dispatch(getMenProducts());
    } else if (e.target.classList.contains("home-jewelery")) {
      dispatch(getJeweleryProducts());
    } else if (e.target.classList.contains("home-electronics")) {
      dispatch(getElectronicsProducts());
    }
  };

  return (
    <div className="homepage">
      <div className="sale-banner-container">
        <div className="sale-banner">
          <span className="banner-text banner-text-s">S</span>
          <span className="banner-text banner-text-a">A</span>
          <span className="banner-text banner-text-l">L</span>
          <span className="banner-text banner-text-e">E</span>
        </div>
      </div>
      <div className="homepage-category-container" onClick={handleClick}>
        <div
          className="category-block"
          style={{
            background: `url(${femaleModel})`,
            backgroundPosition: "50% 19%",
            backgroundSize: "cover",
          }}
        >
          <div className="category-block-backdrop home-women">
            <p className="home-women">Women's Clothing</p>
          </div>
        </div>
        <div
          className="category-block"
          style={{
            background: `url(${maleModel})`,
            backgroundPosition: "50% 19%",
            backgroundSize: "cover",
          }}
        >
          <div className="category-block-backdrop home-men">
            <p className="home-men">Men's Clothing</p>
          </div>
        </div>
        <div
          className="category-block"
          style={{
            background: `url(${jeweleryPic})`,
            backgroundPosition: "50% 19%",
            backgroundSize: "cover",
          }}
        >
          <div className="category-block-backdrop home-jewelery">
            <p className="home-jewelery">Jewelery</p>
          </div>
        </div>
        <div
          className="category-block"
          style={{
            background: `url(${phonePic})`,
            backgroundPosition: "50% 19%",
            backgroundSize: "cover",
          }}
        >
          <div className="category-block-backdrop home-electronics">
            <p className="home-electronics">Electronics</p>
          </div>
        </div>
      </div>
    </div>
  );
}

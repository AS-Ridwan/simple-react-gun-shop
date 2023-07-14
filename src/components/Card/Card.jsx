import React from "react";
import "./Card.css";
import { BsFillCartFill } from "react-icons/bs";

const Card = ({ gun, handleAddToCart }) => {
  const { img, name, bullet, action, capacity, id } = gun;
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="gun-info">
        <h1>{name}</h1>
        <p>Bullet Type : {bullet}</p>
        <p>Capacity : {capacity}</p>
        <p>Action : {action}</p>
      </div>
      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(gun)}>
          {" "}
          <BsFillCartFill className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;

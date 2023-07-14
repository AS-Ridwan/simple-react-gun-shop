import React from "react";
import "./Navbar.css";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = ({ openModal, cart }) => {
  return (
    <div className="navbar">
      <h1>GUN sTORE</h1>
      <div className="cart-counter">
        <button onClick={openModal}>
          <BsFillCartFill className="icon" />
          <span>{cart.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

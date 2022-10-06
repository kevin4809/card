import React from "react";
import img from "../images/img-desk.jpg";
import "../css/card.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="content">
      <div className="card">
        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid img" src={img} alt="Scent" />
          </div>
          <div className="col-sm-6 info-card">
            <h2> Perfume</h2>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <h3>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </h3>

            <div className="price">
              <h1> $149.99</h1>
              <h3>$169.99</h3>
            </div>
            <div className="buttom">
              <button className="buttom-cart">
                <AiOutlineShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

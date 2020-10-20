import React from "react";
import CardItem from "./CardItem";

import "../styles/components/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Os Locais mais lindos de Trindade estão aqui</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Aguas Cristalinas, perfeita para mergulho e observação de peixes."
              label="Ver mais"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Explore nossas pedras, existem diversos locais maravilhosos para observar."
              label="Ver mais"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Areia branca, famosa por fazer massagem nos pés."
              label="Ver mais"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Mar com ondas bem baixas, o ideal para toda familiar nadar."
              label="Ver mais"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Temos inumeras trilhas com muita diversidade de natureza."
              label="Ver mais"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

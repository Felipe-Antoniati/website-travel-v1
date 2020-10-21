import React from "react";
import CardItem from "./CardItem";

import "../styles/components/Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Os Locais mais lindos de Guaruja estão aqui</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Trilha em meio a Natureza com acesso direto a Praia."
              label="Ver mais"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Seguimos com responsabilidade todas as normas regulamentadoras de saúde."
              label="Ver mais"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Areias que fazem jus a o nome do local, com ondas que chegam a 1m."
              label="Ver mais"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Não trouxe barraca? Não se preocupe...Nós alugamos Barracas."
              label="Ver mais"
              path="/services"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Local de Camping em meio a mata nativa da Prainha Branca."
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

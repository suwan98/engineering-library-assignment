"use client";

import {forwardRef} from "react";

function PokeCard({image, name}, innerRef) {
  return (
    <>
      <div className="poke-card" ref={innerRef}>
        <img src={image} alt={name} className="poke-card__image" />
        <h2 className="poke-card__name">{name}</h2>
      </div>
    </>
  );
}

export default forwardRef(PokeCard);

import { useState } from "react";

import { ToursData } from "./@types/tours";

export function Tour({ id, image, info, price, name }: ToursData) {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />

      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}</p>
        <button className="delete-btn">not interested</button>
      </footer>
    </article>
  );
}

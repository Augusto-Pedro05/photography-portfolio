import React, { useState } from "react";
import "./Carousel.css";

import LessThan from "../assets/vectors/LessThan.png";
import GreaterThan from "../assets/vectors/GreaterThan.png";

export default function Carousel({ items }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const len = items.length;

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    const next = (index + (dir === "next" ? 1 : -1) + len) % len;
    setIndex(next);
    setTimeout(() => setAnimating(false), 500);
  };

  return (
    <div className="carousel">
      <button className="nav left" onClick={() => go("prev")}>
        <img src={LessThan} alt="prev" />
      </button>

      <div className="viewport">
        <div
          className="track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((it, i) => (
            <div className="slide" key={i}>
              <div className="slide-info">
                <h2>“</h2>
                <p>{it.text}</p>
                <h3>{it.author}</h3>
              </div>
              <img className="slide-img" src={it.img} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <button className="nav right" onClick={() => go("next")}>
        <img src={GreaterThan} alt="next" />
      </button>
    </div>
  );
}

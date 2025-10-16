import { useState, useEffect } from "react";
import { NmConstant } from "../Constants/NameConstants";

export default function Carousel({ item, circular, autoPlay, interval }) {
  const [index, setIndex] = useState(0);

  function next() {
    let newIndex = index + 1;

    if (circular || autoPlay) {
      if (newIndex >= item.length) {
        newIndex = 0;
      }
    } else {
      if (newIndex >= item.length) {
        newIndex = item.length - 1;
      }
    }

    setIndex(newIndex);
  }

  function prev() {
    let newIndex = index - 1;

    if (circular || autoPlay) {
      if (newIndex < 0) {
        newIndex = item.length - 1;
      }
    } else {
      if (newIndex < 0) {
        newIndex = 0;
      }
    }

    setIndex(newIndex);
  }

  useEffect(function autoPlayEffect() {
    if (!autoPlay) return;

    const timerId = setInterval(function () {
      next();
    }, interval);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [index, autoPlay, interval]);

  return (
    <div className="carousel">
      <button onClick={prev}>{NmConstant.Buttons.Prev}</button>
      
      <div className="carousel-item">
        <img src={item[index].src} alt={item[index.alt]} />
        <p>{item[index].message}</p>
        </div>
      <button onClick={next}>{NmConstant.Buttons.Next}</button>
    </div>
  );
}

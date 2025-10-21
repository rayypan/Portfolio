

import { useState, useEffect } from "react";
import { NmConstant } from "../Constants/NameConstants";

export default function Carousel({ item, circular, autoPlay, interval }) {
  const [rotation, setRotation] = useState(0);

  // Calculate angle between each item (360 degrees / number of items)
  const angleStep = 360 / item.length;

  useEffect(function autoPlayEffect() {
    if (!autoPlay) return;

    const timerId = setInterval(function () {
      setRotation(prev => prev + angleStep);
    }, interval);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [autoPlay, interval, angleStep]);

  const handlePrev = () => {
    setRotation(prev => prev - angleStep);
  };

  const handleNext = () => {
    setRotation(prev => prev + angleStep);
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>{NmConstant.Buttons.Prev}</button>
      
      <div 
        className={`carousel-item ${!autoPlay ? 'manual-mode' : ''}`}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {item.map((card, idx) => {
          const angle = idx * angleStep;
          
          return (
            <div
              key={card.id}
              className="carousel-card-wrapper"
              style={{ 
                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(300px)` 
              }}
            >
              <img src={card.src} alt={card.altImg} />
              <p>{card.message}</p>
            </div>
          );
        })}
      </div>

      <button onClick={handleNext}>{NmConstant.Buttons.Next}</button>
    </div>
  );
}
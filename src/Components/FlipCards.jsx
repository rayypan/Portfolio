
import { useState } from "react";
import "../Styles/Flipcard.css";
export default function FlipCard({front, back}) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isDancing, setIsDancing] = useState(false)

  const  handleclick=()=>{
    setIsFlipped(!isFlipped);
    setIsDancing(!isDancing);
    setTimeout(() => setIsDancing(false), 600);

  }
  return (
    
      <div onClick={handleclick} className={`FlipCard ${isDancing ? 'dancing' : ''} ${isFlipped ? 'flipped' : ''}`}  >
        <div className="FlipCard-inner">
         {isFlipped ? (
          <div className="FlipCard-back">{back}</div>
        ) : (
          <div className="FlipCard-front">{front}</div>
        )}
        </div>
      </div>
   
  );
}

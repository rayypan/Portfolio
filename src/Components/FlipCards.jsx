import { useState } from "react";
export default function FlipCard({front, back}) {
  const [isFlipped, setIsFlipped] = useState(false);

  
  return (
    
      <div onClick={() => setIsFlipped(!isFlipped)} className="FlipCard"  >
         {isFlipped ? (
          <div className="FlipCard-back">{back}</div>
        ) : (
          <div className="FlipCard-front">{front}</div>
        )}
      </div>
   
  );
}

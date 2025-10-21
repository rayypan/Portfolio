import Carousel from "../Components/Carousal";
import { NmConstant } from "../Constants/NameConstants";
import sun1 from "../Photos/sun1.jpg";
import sun2_11zon from "../Photos/sun2_11zon.jpg";
import sun3_11zon from "../Photos/sun3_11zon.jpg";
import sun4_11zon from "../Photos/sun4_11zon.jpg";
import sun5_11zon from "../Photos/sun5_11zon.jpg";
import "../Styles/DescriptionAboutMe.css";

export default function DescriptionAboutMe() {
  let i = 0;
  const item = [
    {
      id: ++i,
      src:  sun1 ,
      altImg: "A",
      message:
        "The Sun is a giant ball of hot plasma that powers life on Earth with its light and heat.",
    },
    {
      id: ++i,
      src:  sun2_11zon ,
      altImg: "B",
      message:
        "Every second, the Sun fuses about 600 million tons of hydrogen into helium, releasing immense energy",
    },
    {
      id: ++i,
      src: sun3_11zon ,
      altImg: "C",
      message:
        "At 150 million kilometers away, sunlight still reaches Earth in just about 8 minutes.",
    },
    {
      id: ++i,
      src:  sun4_11zon ,
      altImg: "D",
      message:
        "The Sun makes up more than 99% of the total mass of our solar system.",
    },
    {
      id: ++i,
      src: sun5_11zon,
      altImg: "E",
      message:
        "One day, the Sun will expand into a red giant, swallowing the inner planets before fading into a white dwarf.",
    },
  ];
  return (
    <section>
      <div className="Description-About-Me">
      <div className="Description-Left-Message">{NmConstant.Description.message}</div>
      <div className="Description-Right-Carousal">
        <Carousel item={item} circular={true} autoPlay={true} interval={0} />
      </div>
      </div>
    </section>
  );
}

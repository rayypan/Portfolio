import Carousel from "../Components/Carousal";
import { NmConstant } from "../Constants/NameConstants";
import { Path } from "../Constants/PathConstants";
import "../Styles/DescriptionDetailsAboutMe.css";

export default function DescriptionAboutMe() {
  let i = 0;
  const item = [
    {
      id: ++i,
      src:  Path.Description.DRIVES ,
      altImg: "long-rides",
      message:
        "Loves long drives and spontaneous adventures.",
    },
    {
      id: ++i,
      src:  Path.Description.SUNSET ,
      altImg: "sunsets and breezes",
      message:
        "sunsets and sea breezes.",
    },
    {
      id: ++i,
      src: Path.Description.HISTORICAL ,
      altImg: "History",
      message:
        "Fascinated by history and cultural stories.",
    },
    {
      id: ++i,
      src:  Path.Description.CODING ,
      altImg: "coding",
      message:
        "creating solutions and building with code.",
    },
    {
      id: ++i,
      src: Path.Description.WRITING,
      altImg: "writing",
      message:
        "Sometimes words are the best way, and writing helps bring thoughts to life.",
    },
  ];
  return (
    <section className="Description-About-Me-Section">
      <div className="Description-About-Me">
      <div className="Description-Left-Message">{NmConstant.Description.message}</div>
      <div className="Description-Right-Carousal">
        <Carousel item={item} circular={true} autoPlay={true} interval={0} />
      </div>
      </div>
    </section>
  );
}

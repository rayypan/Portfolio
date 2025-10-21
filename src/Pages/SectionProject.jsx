import { useState } from "react";
import { Path } from "../Constants/PathConstants";
import { NmConstant } from "../Constants/NameConstants";
import FlipCard from "../Components/FlipCards";
import "../Styles/Projects.css";
export default function Project() {
  var [currentIndex, setCurrentIndex] = useState(0);

  let i = 0;
  const projects = [
    {
      id: ++i,
      projectImg: Path.ProjectPicture.Pic1,
      projectDescription: NmConstant.AboutMe.Description1,
      title:"ABC",
    },
    {
      id: ++i,
      projectImg: Path.ProjectPicture.Pic2,
      projectDescription: NmConstant.AboutMe.Description2,
      title:"DEF",
    },
    {
      id: ++i,
      projectImg: Path.AboutMeDisplayPicture.DP_TOM_1,
      projectDescription: NmConstant.AboutMe.Description3,
      title:"GHI",
    },
  ];

  function handleNextPage() {
    if (currentIndex < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePreviousPage() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function FrontCard({ frontcard }) {
    return (
      <div>
        
        <img src={frontcard.projectImg} alt="Img" />
        <p>{frontcard.title}</p>
      </div>
    );
  }
  function BackCard({ backcard }) {
    return (
      <div>
        
        <div>{backcard.projectDescription}</div>
        
      </div>
    );
  }

  return (
    <section>
      <div className="Project-List">
        <div Project-List-Previous>
          <button onClick={handlePreviousPage} disabled={currentIndex === 0}>
            &lt;
          </button>
        </div>
        <div Project-List-Image>
          <FlipCard
            front={<FrontCard frontcard={projects[currentIndex]} />}
            back={<BackCard backcard={projects[currentIndex]} />}
          />
        </div>
        <div Project-List-Next>
          <button
            onClick={handleNextPage}
            disabled={currentIndex === projects.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

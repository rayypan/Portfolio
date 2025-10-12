import { useState } from "react";
import { Path } from "../Constants/PathConstants";
import { NmConstant } from "../Constants/NameConstants";
import FlipCard from "../Components/FlipCards";
export default function Project() {
  var [currentIndex, setCurrentIndex] = useState(0);

  let i = 0;
  const projects = [
    {
      id: ++i,
      projectImg: Path.ProjectPicture.Pic1,
      projectDescription: NmConstant.AboutMe.Description1,
    },
    {
      id: ++i,
      projectImg: Path.ProjectPicture.Pic2,
      projectDescription: NmConstant.AboutMe.Description2,
    },
    {
      id: ++i,
      projectImg: Path.AboutMeDisplayPicture.DP_TOM_1,
      projectDescription: NmConstant.AboutMe.Description3,
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
        <button onClick={handlePreviousPage} disabled={currentIndex === 0}>
          &lt;
        </button>
        <img src={frontcard.projectImg} alt="Img" />
        <button
          onClick={handleNextPage}
          disabled={currentIndex === projects.length - 1}
        >
          &gt;
        </button>
      </div>
    );
  }
  function BackCard({ backcard }) {
    return (
      <div>
        {" "}
        <button onClick={handlePreviousPage} disabled={currentIndex === 0}>
          &lt;
        </button>
        <div>{backcard.projectDescription}</div>
        <button
          onClick={handleNextPage}
          disabled={currentIndex === projects.length - 1}
        >
          &gt;
        </button>
      </div>
    );
  }

  return (
    <section className="Project">
      <div className="Project-List">
        <FlipCard
          front={<FrontCard frontcard={projects[currentIndex]} />}
          back={<BackCard backcard={projects[currentIndex]} />}
        />
      </div>
    </section>
  );
}

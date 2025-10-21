import FlipCard from "../Components/FlipCards";
import { Path } from "../Constants/PathConstants";
import "../Styles/TechStack.css";
export default function TechStack() {
  let i = 0;
  const techStack = [
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Java",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "JavaScript",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "HTML",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "CSS",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "ReactJS",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Spring Boot",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "MySQL",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Data Structures & Algorithms",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "OOP",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Git",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "GitHub",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Jira",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Agile",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Problem-Solving",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.AboutMeDisplayPicture.DP_TOM_2,
      altName: "Communication",
      techName: "",
      description: "",
    },
  ];

  function Front({icon}) {
    return (
        
            <img src={icon.techStackImg} alt={icon.altName} />

        

    );
  }

  function Back({icon}) {
    return (
      icon.altName
    );
  }

  return (
    <section >
     {techStack.map((icon,idx)=>(
      <div className="Section-Tech-Stack">
        <FlipCard 
        key={idx}
        front= {<Front icon={icon}/>}
        back ={<Back icon={icon}/>}
        />
        </div>

     ))}
    </section>
  );
}

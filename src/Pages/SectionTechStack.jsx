import FlipCard from "../Components/FlipCards";
import { Path } from "../Constants/PathConstants";
import "../Styles/TechStack.css";
export default function TechStack() {
  let i = 0;
  const techStack = [
    {
      id: ++i,
      techStackImg: Path.TechStackSection.JAVA,
      altName: "Java",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.JAVASCRIPT,
      altName: "JavaScript",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.HTML,
      altName: "HTML",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.CSS,
      altName: "CSS",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.REACT,
      altName: "ReactJS",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.SPRINGBOOT,
      altName: "Spring Boot",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.MYSQL,
      altName: "MySQL",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.DSA,
      altName: "Data Structures & Algorithms",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.OOPS,
      altName: "OOP",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.GIT,
      altName: "Git",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.GITHUB,
      altName: "GitHub",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.JIRA,
      altName: "Jira",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.AGILE,
      altName: "Agile",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.PROBLEM_SOLVING,
      altName: "Problem-Solving",
      techName: "",
      description: "",
    },
    {
      id: ++i,
      techStackImg: Path.TechStackSection.COMMUNICATION,
      altName: "Communication",
      techName: "",
      description: "",
    },
  ];

  function Front({ icon }) {
    return (
      <div className="TechStack-Front">
        <img src={icon.techStackImg} alt={icon.altName} />
      </div>
    );
  }

  function Back({ icon }) {
    return <div className="TechStack-Back">{icon.altName}</div>;
  }

  return (
    <section className="TechStack-Section">
      {techStack.map((icon, idx) => (
        <div className="Section-Tech-Stack" key={icon.id}>
          <FlipCard front={<Front icon={icon} />} back={<Back icon={icon} />} />
        </div>
      ))}
    </section>
  );
}

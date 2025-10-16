
import AboutMe from '../Pages/SectionAboutMe';
import TechStack from '../Pages/SectionTechStack';
import Project from '../Pages/SectionProject';
import DescriptionAboutMe from '../Pages/SectionDescriptionAboutMe';
import Contacts from '../Pages/SectionContacts';
import ViewMode from '../Pages/ViewMode';
import "../Components/Design.css";
export default function App() {
  return (
    <div className="App">

      <ViewMode/>
      <AboutMe/>
      <TechStack/>
      <Project/>
      <DescriptionAboutMe/>
      <Contacts/>

      
    </div>
  );
}



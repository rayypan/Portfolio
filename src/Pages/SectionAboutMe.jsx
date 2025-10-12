import { NmConstant } from "../Constants/NameConstants";
import { Path } from "../Constants/PathConstants";
export default function AboutMe()
{
    return(

        <section>
        <div className="Section-AboutMe">
            <div className="Section-AboutMe-Summary-left">
                <h3>{NmConstant.AboutMe.Welcome_Message}</h3>
                <h1>{NmConstant.AboutMe.Name}</h1>
                <p>{NmConstant.AboutMe.OneLiner}</p>
            </div>
            <div className="Section-AboutMe-Photo-right">
                <img src={Path.AboutMeDisplayPicture.DP_TOM_2} alt="My Picutre" />
            </div>

        
        </div>
        </section>
    )
}
import { Path } from "../Constants/PathConstants"
import { useState } from "react"
export default function ViewMode(){
    const [theme,setTheme]  = useState(false)
    function handlethemeChange(e){
       
        setTheme(!theme);
    }
    return(
        <div className="ViewMode-LightOrDark">
            <img src={Path.ViewMode.NightorLight} alt="ViewModeIcon" onClick={handlethemeChange}/>
        </div>
    )
}
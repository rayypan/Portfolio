import { Path } from "../Constants/PathConstants";
import { useState, useEffect } from "react";
import "../Styles/ViewMode.css";
export default function ViewMode(){
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    function handlethemeChange(){
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return(
       
        <button className="ViewMode-LightOrDark" onClick={handlethemeChange}>
            <img src={Path.ViewMode.NightorLight} alt="ViewModeIcon" />
        </button>
        
    )
}
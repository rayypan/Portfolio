import { Path } from "../Constants/PathConstants";
export default function Contacts(){
    let i=0;
    const icons = [
        {id:++i,src:Path.ContactSection.EMAIL,alt:"EmailIcon",link:"",fill:"currentColor",d:"M20 4H4c-1.1 0-2 0.9-2 2v12...z"},
        {id:++i,src:Path.ContactSection.GITHUB,alt:"GitHub",link:"",fill:"currentColor",d:"M12 0.297c-6.63 0-12 5.373-12 12...z"},
        {id:++i,src:Path.ContactSection.LINKEDIN,alt:"LinkedIn",link:"",fill:"currentColor",d:"M19 0h-14c-2.76 0-5 2.24-5 5...z"}
    ]
    return (
        <section>

            <div className="Contact-Section">
                {icons.map(icon=>(
                    <div className="Contact-Section-icons" key={icon.id}>
                    <a href={icon.link}>
                        <img src={icon.src} alt={icon.alt} />
                        <path fill={icon.fill} d={icon.d}/>
                    </a>
                </div>
                ))}
                
            </div>

        </section>
    )
}
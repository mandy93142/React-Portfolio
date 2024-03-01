import React from "react";
import { FontAwsomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    const icons = [
        {
            name: "fa-brands fa-github",
            links: "https://github.com"
        },
        {
            name: "fa-brands fa-linkedin",
            links: "https://linkedin.com"
        }
    ]

    return (
        <footer style={{height:"50px", display:"grid", alignItems:"center", justifyContent:"center", gridGap:"15px"}}>
        
            <section>
            ©{new Date().getFullYear()}
            {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"black", cursor:"pointer"}}> <i className={icon.name}></i></a>
            })}    
            </section>
        </footer>
    )
}


export default Footer;



import React, {useState} from "react";
import Experience from "./Experience"
import Education from "./Education";
import Skills from "./Skills";


function About(){
    const[active, setActive] = useState("Experience");
    return(
        <div>
        <hr/>
        <h1 className="about-heading" id="About">
            About Me
        </h1>
        <div className="sectionsa">
        
        <div className="section-1">
        <nav className="aboutButton">
        <button className="button-51" onClick={() => setActive("Experience")}> Experience</button>
        <br/>
        <button  className="button-51" onClick={() => setActive("Education")}> Education</button>
        <br/>
        <button className="button-51" onClick={() => setActive("Skills")}> Skills</button>
        
        </nav>
        
    
        </div>
        <div className="section-2">
        {active === "Experience" && <Experience />}
        {active === "Education" && <Education />}
        {active === "Skills" && <Skills />}

    
        </div>
        </div>
        <hr/>
        </div>
    )

}
export default About
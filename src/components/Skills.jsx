import React from 'react';
import {  FaCss3, FaReact, FaJsSquare }  from "react-icons/fa";
import { VscCircleLargeFilled } from "react-icons/vsc";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { SiSelenium, SiMicrosoftoffice, SiCplusplus, SiPython, SiHtml5 } from "react-icons/si";


export default function Skills() {
  return (
  
    <div className="slider">

    <h2 className="slider-h2"> Skills</h2>

    <div className='skill-section'>
    <div className='skill-section-1'>

    <FaJsSquare size={40} className='skillLogo' />
    <span className='skillName'> Javascript</span>
    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <div className='space-between'> </div>


    <FaCss3 size={40} className='skillLogo' />
    <span className='skillName'> CSS</span>

    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />

    <div className='space-between'> </div>


    <FaReact size={40} className='skillLogo' />
    <span className='skillName'> React</span>

    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    
    
    <div className='space-between'> </div>


    <SiSelenium size={40} className='skillLogo' />
    <span className='skillName'> Selenium</span>

    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />


    </div>

    <div className='skill-section-2'>
    <SiCplusplus size={40} className='skillLogo' />
    <span className='skillName'> C++</span>
    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <div className='space-between'> </div>

    <SiMicrosoftoffice size={40} className='skillLogo' />
    <span className='skillName'> Microsoft Office</span>
    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <div className='space-between'> </div>
    <SiPython size={40} className='skillLogo' />
    <span className='skillName'> Python</span>
    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />
    <div className='space-between'> </div>

    <SiHtml5 size={40} className='skillLogo' />
    <span className='skillName'> HTML</span>
    <br/>

    <VscCircleLargeFilled className='skillRating'/>
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeFilled className='skillRating' />
    <VscCircleLargeOutline className='skillRating' />

    </div>


    </div>
    </div>

  );
}

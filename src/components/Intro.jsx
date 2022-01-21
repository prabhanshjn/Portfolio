
import ProfilePic from "./../img/01.jpeg"
import FacebookLogo from "./../img/icons8-facebook-30.png"
import LinkedInLogo from "./../img/icons8-linkedin-30.png"
import WhatsappLogo from "./../img/icons8-whatsapp-30.png"
import GithubLogo from "./../img/icons8-github-60.png"



const Intro = () => {
    return (
        <div className="i">
        <div className="i-left"> 
        <div className="i-left-wrapper"> 

        <h2 className="i-intro">Hello, My name is </h2>
        <h2 className="i-name"> Prabhansh Jain </h2>
        <div className="i-title"> 
        <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">QA Analyst</div>
            <div className="i-title-item">Automation Test Engineer</div>
            <div className="i-title-item">Content Writer</div>
            <div className="i-title-item">Student</div>



        </div> 
        </div>
        <p className="i-desc">
            I am a Final Year Engineering Student at HKUST, I work as a QA Analyst 
            and a Web Developer. I am actively looking for internships and jobs. Contact 
            me if you like my work.
        </p>
        <div className="social-login"> 
        
        
        <a href="https://www.facebook.com/prabhansh.jain.3/" target="_blank" rel="noreferrer">

            <img src={FacebookLogo} alt="Facebook Logo" className="social-pic"/>
        </a>

         
        <a href="https://www.linkedin.com/in/prabhansh-jain-660243158/" target="_blank" rel="noreferrer">

            <img src={LinkedInLogo} alt="LinkedIn Logo" className="social-pic-1" />
        </a>

        <a href="https://wa.me/918079058146?text=Hi,%20I%20in%20viewed%20your%20portfolio%20website" target="_blank" rel="noreferrer">

            <img src={WhatsappLogo} alt="WhatsApp Logo" className="social-pic-1" />
        </a>

        <a href="https://github.com/prabhanshjn" target="_blank" rel="noreferrer">

            <img src={GithubLogo} alt="Github Logo" className="social-pic-1" />
        </a>



        
        
        </div>
           
        </div>
         </div>
        <div className="i-right"> 
        <div className="i-bg"> </div>
        <img  src = {ProfilePic}  alt = "" className="i-image"/>
        </div>

        </div>
    )
}

export default Intro

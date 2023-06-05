import { Link } from "react-router-dom"
import "./footer.css"


export default function Footer() {
    return (
        <div className="footer">
            <div className="quoteContainer">
                <div className="qheaderBox">
                    <div className="quoteHeader">Quote of the Day</div>
                </div>
                <div className="ulQuote"></div>
                <div className="quoteContent">
                    <div className="quoteTxt">"Your present circumstances don’t determine where you go; they merely determine where you start."</div>
                    <div className="quoteAuthor"><span>-</span> Nido Qubein</div>
                </div>
            </div>
    
            <div className="aboutUs">
                <div className="contactUs">
                    <div className="cheaderBox">
                        <div className="contactHeader">Contact Us</div>
                    </div>
                    <div className="ulContact"></div>
                    <div className="contactLinks">
                        <a href="https://www.facebook.com/groups/BITS.MHSG" target="_blank"><i className="footerLinks fa-brands fa-facebook-square foot-fbLogo"></i></a>
                        <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><i className="footerLinks fa-brands fa-discord foot-discordLogo"></i></a>
                        <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><i className="footerLinks fa-brands fa-instagram foot-instaLogo"></i></a>
                        <a href="https://in.linkedin.com/company/bits-mental-health-support-group" target="_blank"><ion-icon name="logo-linkedin" className="SocialLinks linkedLogo"></ion-icon></a>
                    </div>
                    <div className="email">Email: <a href="mailto:mhsg@hyderabad.bits-pilani.ac.in">mhsg@hyderabad.bits-pilani.ac.in </a></div>
                </div>
                <div className="logo">
                    <img className="MHSGLogo" src={require('../images/Logo Long.png')} alt="not found yet"  />
                    <img className="BITSLogo" src={require('../images/BITS_Pilani.png')} alt="not found yet"  />
                </div>
            </div>
        </div>
    )
}
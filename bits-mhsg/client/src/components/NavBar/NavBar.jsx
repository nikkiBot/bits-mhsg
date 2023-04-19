// import { Link } from "react-router-dom";
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  // const user = true;

  return (
    <div className = "Nav">

        <div className="topleft">
        <a href="https://www.facebook.com/groups/BITS.MHSG" target="_blank"><i className="SocialLinks fa-brands fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><i className="SocialLinks fa-brands fa-discord"></i></a>
        <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><i className="SocialLinks fa-brands fa-instagram"></i></a>
        </div>

        <div className="topcenter">
            <ul className="NavBarList">
                {/* <li className="NavLink">Home</li> */}
                {/* <li className="NavLink">Articles</li> */}
                {/* <li className="NavLink">What's Next</li> */}
                {/* <li className="NavLink">About Us</li> */}
                <li className="NavLink"> <Link to="/" activeClassName="active-nav-link navTxt">Home</Link></li>
                <li className="NavLink"> <Link to="/Articles" activeClassName="active-nav-link navTxt">Articles</Link></li>
                <li className="NavLink"> <Link to="/Events" activeClassName="active-nav-link navTxt">Events</Link></li>
                <li className="NavLink"> <Link to="/Resources" activeClassName="active-nav-link navTxt">Resources</Link></li>
                <li className="NavLink"> <Link to="/Team" activeClassName="active-nav-link navTxt">Team</Link></li>
            </ul>
        </div>

        <div className="topright">
            <img className="Logo" src={require('../images/Logo_Short.png')} alt="not found yet"  />
            <i class="SearchIcon fa-solid fa-magnifying-glass"></i>
            <div className="burger">
              <div className="burgerLine"></div>
              <div className="burgerLine"></div>
              <div className="burgerLine"></div>
            </div>
        </div>

    </div>
  )
}


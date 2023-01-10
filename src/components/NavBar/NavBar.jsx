// import { Link } from "react-router-dom";
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  // const user = true;

  return (
    <div className = "Nav">

        <div className="topleft">
        <i className="SocialLinks fa-brands fa-facebook-square"></i>
        <i className="SocialLinks fa-brands fa-discord"></i>
        <i className="SocialLinks fa-brands fa-instagram"></i>
        </div>

        <div className="topcenter">
            <ul className="NavBarList">
                {/* <li className="NavLink">Home</li> */}
                {/* <li className="NavLink">Articles</li> */}
                {/* <li className="NavLink">What's Next</li> */}
                {/* <li className="NavLink">About Us</li> */}
                <li className="NavLink"> <Link to="/" activeClassName="active-nav-link">Home</Link></li>
                <li className="NavLink"> <Link to="/Posts" activeClassName="active-nav-link">Articles</Link></li>
                <li className="NavLink"> <Link to="/Events" activeClassName="active-nav-link">Events</Link></li>
                <li className="NavLink"> <Link to="/Whatsnext" activeClassName="active-nav-link">What's Next</Link></li>
            </ul>
        </div>

        <div className="topright">
            <img className="Logo" src={require('../images/Logo_Short.png')} alt="not found yet"  />
            <i class="SearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        

    </div>
  )
}

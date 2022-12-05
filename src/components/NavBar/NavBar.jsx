import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  const user = true;

  return (
    <div className = "Nav">

        <div className="topleft">
        <i className="SocialLinks fa-brands fa-facebook-square"></i>
        <i className="SocialLinks fa-brands fa-discord"></i>
        <i className="SocialLinks fa-brands fa-instagram"></i>
        </div>

        <div className="topcenter">
            <ul className="NavBarList">
                <li className="NavLink">
                  <Link to="/" className="link">Home</Link>
                </li>
                <li className="NavLink">
                  <Link to="/" className="link">Articles</Link>
                </li>
                <li className="NavLink">
                  <Link to="/" className="link">Events</Link>
                </li>
                <li className="NavLink">
                  <Link to="/" className="link">What's Next</Link>
                </li>
                <li className="NavLink">
                  <Link to="/" className="link">About Us</Link>
                </li>
                <li className="NavLink">
                  {user && "Logout"}
                </li>
            </ul>
        </div>

        <div className="topright">
            <img className="Logo" src={require('../images/Logo_Short.png')} alt="not found yet"  />
            <i class="SearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        

    </div>
  )
}

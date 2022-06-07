import "./NavBar.css"

export default function NavBar() {
  return (
    <div className = "Nav">

        <div className="topleft">
        <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-discord"></i>
        <i className="fa-brands fa-instagram"></i>
        </div>

        <div className="topcenter">
            <ul className="NavBarList">
                <li className="NavLink">Home</li>
                <li className="NavLink">Articles</li>
                <li className="NavLink">Events</li>
                <li className="NavLink">What's Next</li>
                <li className="NavLink">About Us</li>
                <li className="NavLink">Logout</li>
            </ul>
        </div>

        <div className="topright">
            <img src="../public/Logo_Short.png" alt="not found yet" />
        </div>
        

    </div>
  )
}

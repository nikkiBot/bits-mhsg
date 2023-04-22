// import { Link } from "react-router-dom";
import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
  // const user = true;
  let count=0;
  function dropdown(){
    console.log(window.innerWidth);
    let viewwidth=window.innerWidth;
    if(viewwidth<=900){
      count=count+1;
      if(count%2===1){

        document.querySelector('.Nav') .style.height="300";
        document.querySelector('.topleft') .style.display="inline-block";
        document.querySelector('.topcenter') .style.display="inline-block";
      }
      else{
        document.querySelector('.topleft') .style.display="none";
        document.querySelector('.topcenter') .style.display="none";
        document.querySelector('.Nav') .style.height="fit-content";
      }
    }
    
  }

  return (
    <div className = "Nav">

        <div className="topleft">
        <a href="https://www.facebook.com/groups/BITS.MHSG" target="_blank"><i className="SocialLinks fa-brands fa-facebook-square fbLogo"></i></a>
        <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><i className="SocialLinks fa-brands fa-discord discordLogo"></i></a>
        <a href="https://www.instagram.com/bits.mhsg/" target="_blank"><i className="SocialLinks fa-brands fa-instagram instaLogo"></i></a>
        </div>

        <div className="topcenter">
            <ul className="NavBarList">
                {/* <li className="NavLink">Home</li> */}
                {/* <li className="NavLink">Articles</li> */}
                {/* <li className="NavLink">What's Next</li> */}
                {/* <li className="NavLink">About Us</li> */}
                <li className="NavLink" onClick={dropdown}> <Link to="/" activeClassName="active-nav-link navTxt"><div className="NavHome NavBox">Home</div></Link>  </li>
                <li className="NavLink" onClick={dropdown}> <Link to="/Articles" activeClassName="active-nav-link navTxt"><div className="NavArticles NavBox"> Articles </div></Link></li>
                <li className="NavLink" onClick={dropdown}> <Link to="/Events" activeClassName="active-nav-link navTxt"><div className="NavEvents NavBox"> Events </div></Link> </li>
                <li className="NavLink" onClick={dropdown}> <Link to="/Resources" activeClassName="active-nav-link navTxt"><div className="NavResources NavBox"> Resources </div></Link></li>
                <li className="NavLink" onClick={dropdown}> <Link to="/Team" activeClassName="active-nav-link navTxt"> <div className="NavTeam NavBox">Team </div></Link> </li>
            </ul>
        </div>

        <div className="topright" onClick={dropdown}>
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


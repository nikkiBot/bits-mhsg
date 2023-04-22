import "./resources.css"
import Switch from "../../switch/Switch"
import ResourceCard from "../../resourceCard/ResourceCard"
import HelplineCard from "../../helplineCard/HelplineCard"
import MoH from "../../images/HealthMinistry.png"
import Mpower from "../../images/Mpower.png"
import Tiss from "../../images/TISS.png"
export default function Resources() {

  const helpline=[
    {
      Desc:"Tele-MANAS Govt(24x7)",
      Phone:"Toll Free: 14416",
      Link: "https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1866498"
    },
    {
      Desc:"Mpower (Mind Matters)",
      Phone:"Mental Health Consulting",
      Link: "https://mpowerminds.com/seekhelp"
    },
    {
      Desc:"iCALL Helpline",
      Phone:"9152987821 8AM-10PM",
      Link: "https://icallhelpline.org/"
    }
  ]

  return (
    <div className="resources">
      <div className="cards">
        <div className="headerBox">
          <h1 className="cardsHeader">Resources</h1>
        </div>
        <div className="ulCard"></div>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        
      </div>
      <div className="helpline">
        <div className="headerBox">
          <h1 className="helplineHeader">Emergency Helpline</h1>
        </div>
        <div className="ulHelpline"></div>
        <div className="helpCards">
          <HelplineCard helpObj={helpline[0]} imgObj={MoH}/>
          <HelplineCard helpObj={helpline[1]} imgObj={Mpower}/>
          <HelplineCard helpObj={helpline[2]} imgObj={Tiss}/>
        </div>
      </div>
    </div>
)
}

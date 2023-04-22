import "./resources.css"
import Switch from "../../switch/Switch"
import ResourceCard from "../../resourceCard/ResourceCard"

export default function Resources() {
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
      </div>
    </div>
)
}

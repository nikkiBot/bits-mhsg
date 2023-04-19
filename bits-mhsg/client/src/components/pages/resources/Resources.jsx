import "./resources.css"
import Switch from "../../switch/Switch"
import ResourceCard from "../../resourceCard/ResourceCard"

export default function Resources() {
  return (
    <div className="resources">
      <div className="cards">
        <h1 className="cardsHeadTxt">Resources</h1>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        <ResourceCard/>
        
      </div>
      <div className="helpline">
        <h1 className="helplineHeadTxt">Emergency Helpline</h1>
      </div>
    </div>
)
}

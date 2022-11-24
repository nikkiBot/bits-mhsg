import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">WHO ARE WE?</span><br/>
            <img className="Logo" src={require('../images/Logo_Short.png')} alt="not found yet"  />
            <p>BITS MHSG is a pan-campus initiative striving to create awareness and start a conversation about mental health. It focuses on preventing mental health issues by tackling them at the initial stages itself.</p>
        </div>
        
    </div>
  )
}

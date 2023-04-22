import './helplineCard.css'
export default function ResourceCard(props){
    return(
        <div className="helplineCard">
            <div className="imgContainer">
                <img src={props.imgObj} alt="Unable" className='helpImg' />
            </div>
            <div className="helpDetails">
                <div className="helpDesc">{props.helpObj.Desc}</div>
                <div className="helpPh">{props.helpObj.Phone}</div>
                <a href={props.helpObj.Link} target="_blank" className="helpLink">More Details: 🌐</a>
            </div>
        </div>
    );
}
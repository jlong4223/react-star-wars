import './starShipCard.css'

export function StarShipCard(props){
    return(
        <div className="StarShipCard">
           <h1 className="cardtitle">{props.result.name}</h1> 
            <h2>Crew Count: {props.result.crew}</h2>
        </div>
    )
}

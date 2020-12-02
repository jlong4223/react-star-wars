import './starShipCard.css'

export function StarShipCard(props){
    return(
        <div className="StarShipCard">
           <h1>{props.result.name}</h1> 
            {/* <h2>Crew Count: {props.result.crew}</h2> */}
    {/* <h2>Passenger Count: {props.result.passengers}</h2> */}
        </div>
    )
}

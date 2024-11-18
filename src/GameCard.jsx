
function GameCard(props){
    return(
        <div>
            <h2>{props.gameTitle}</h2>
            <img className="game-art-img" src = {props.gameArt}></img>
        </div>
    )
}

export default GameCard;
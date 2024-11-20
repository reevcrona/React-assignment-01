import "./gameCard.css"
import Bs2Dlc from "./assets/minervasDen.png";



function GameCard(props){

    const handleMouseEnter = () => {
        document.body.style.backgroundImage = `url(${props.bgImage})`
    }

    

    return(
        <div className="game-card-container" onMouseEnter={handleMouseEnter} onClick={props.onClick} >
            <img className={`game-art-img ${props.gameClass}`} src = {props.gameArt}></img>
        </div>
    )
}

export default GameCard;
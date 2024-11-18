
function GameCard(props){

    const handleMouseEnter = () => {
        document.body.style.backgroundImage = `url(${props.bgImage})`
    }

    

    return(
        <div className="game-card-container" onMouseEnter={handleMouseEnter} >
            <img className={`game-art-img ${props.gameClass}`} src = {props.gameArt}></img>
        </div>
    )
}

export default GameCard;
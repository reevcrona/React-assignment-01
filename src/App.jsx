import GameCard from "./GameCard";

import Bs1Art from "./assets/bs1-box-art.jpg";
import Bs2Art from "./assets/bs2-box-art.jpg";
import BsIArt from "./assets/bsi-box-art.jpg";
import BstcArt from "./assets/bstc-box-art.jpg";
import BsIBasOneArt from "./assets/bsI-bas-1.jpg";
import BsIBasTwoArt from "./assets/bsI-bas-2.jpg";

import Bs1Bg from "./assets/test-bg.jpg";
import Bs2Bg from "./assets/bs2-bg.jpg";
import BsIBg from "./assets/bsI-bg.jpg";
import BstcBg from "./assets/bstc-bg.jpg";

import MinervasDen from "./assets/minervasDen.png";

import { useState } from "react";

const games = [
  {
    title:"Bioshock",
    art:Bs1Art,
    class:"bs1",
    bgImage:Bs1Bg
  },
  {
    title:"Bioshock 2",
    art:Bs2Art,
    class:"bs2",
    bgImage:Bs2Bg,
    dlc:{
      title:"Minervas Den",
      art:MinervasDen
    }
  },
  {
    title:"Bioshock infinite",
    art:BsIArt,
    class:"bsI",
    bgImage:BsIBg
  },
  {
    title:"Bioshock the collection",
    art:BstcArt,
    class:"bstc",
    bgImage:BstcBg
  }
]

function App() {
  
  const [selectedGame, setSelectedGame] = useState(null);

  console.log(selectedGame)

  const renderStartPage = () => {
    return (
      <div>
        <h1 className="page-header">BIOSHOCK</h1>
        <h2 className="page-sub-header">HUB</h2>
        <div className="container">
          {games.map((game) => {
           return(
            <GameCard 
              key={game.title}
              gameTitle={game.title}
              gameArt = {game.art}
              bgImage = {game.bgImage}
              enableMouseEnter = {true}
              onClick = {() => setSelectedGame(game)}
            />
           ) 
          })}
        </div>
      </div>
    )
  }
  const renderGameOptions = () => {
    
    return(
      <div>
          <h1 className="page-header">BIOSHOCK</h1>
          <h2 className="page-sub-header">HUB</h2>
          <div className="container">
            <GameCard gameArt = {BsIBasOneArt} />
            <GameCard gameArt = {BsIBasTwoArt} />
        </div>
      </div>
      
      
    )
  }

   
  return selectedGame ? renderGameOptions() : renderStartPage();
}

export default App

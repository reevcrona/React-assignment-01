import GameCard from "./GameCard";
import Bs1Art from "./assets/bs1-box-art.jpg";
import Bs2Art from "./assets/bs2-box-art.jpg";
import BsIArt from "./assets/bsi-box-art.jpg";
function App() {
  return(
   <div>
    <GameCard gameTitle ="Bioshock" gameArt = {Bs1Art}/>
    <GameCard gameTitle ="Bioshock 2" gameArt = {Bs2Art}/>
    <GameCard gameTitle ="Bioshock Infinite" gameArt = {BsIArt}/>
    </div>
  )
}

export default App

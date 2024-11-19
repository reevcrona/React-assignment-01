import GameCard from "./GameCard";
import Bs1Art from "./assets/bs1-box-art.jpg";
import Bs2Art from "./assets/bs2-box-art.jpg";
import BsIArt from "./assets/bsi-box-art.jpg";
import BstcArt from "./assets/bstc-box-art.jpg";

import Bs1Bg from "./assets/test-bg.jpg";
import Bs2Bg from "./assets/bs2-bg.jpg";
import BsIBg from "./assets/bsI-bg.jpg";
import BstcBg from "./assets/bstc-bg.jpg";

function App() {
  return(
   <div>
      <div className="container">
        <GameCard gameTitle ="Bioshock" gameArt = {Bs1Art} gameClass ="bs1" bgImage = {Bs1Bg} />
        <GameCard gameTitle ="Bioshock 2" gameArt = {Bs2Art} gameClass ="bs2" bgImage ={Bs2Bg}/>
        <GameCard gameTitle ="Bioshock Infinite" gameArt = {BsIArt} gameClass ="bsI" bgImage ={BsIBg} />
        <GameCard gameArt = {BstcArt} gameClass ="bstc" bgImage = {BstcBg} />
      </div>
    
    </div>
  )
}

export default App

/* eslint no-eval: 0 */

import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import '../style/Calculator.css';
import {useState} from "react" //importation de la fonction useState de réact

export default function Calculator() {

  let [screen, setScreen] = useState('') // variable qui l'état de mon écran
  let [over9000, setOver] = useState(false) // variable qui l'état de mon over
  let calc = []; // tableau qui contient mon opération
  let resultat = []; // tableau qui contient mon résultat

  const hundleClick = (calcNumber) => { //fonction pour géré mes boutton vers l'écran
    setScreen(screen + calcNumber)
    if (calcNumber === "AC") {
      setOver(false)
      setScreen('')
    }
    calc.push(screen + calcNumber)
    console.log(calc)
  }

  const handleResult = (result) => {  //fonction pour géré mes resultat vers l'écran
    if (result > 9000) {
      setOver(true)
      setScreen(result)
      resultat.push(resultat)

    } else {
      setScreen(result)
      setOver(false)
      resultat.push(result)
      console.log(resultat)
    }
  }

  // fetch('./api/dataBase.php'{
  //   method : 'POST',
  //   body : JSON.stringify({
  //     search : search.value
  //   }),
  //   Headers : {
  //     "Content-type" : "application/json; charset=UTF-8"
  //   }
  // })

  return (
    <div>
      <div className="calculator9000">
        <TheTitle />
        <div className="cal-wrapper">
          <BeautifulScreen screenValue= {screen} />
          {over9000 && <ItSOverNineThousand handleResultParent={handleResult} />}
          <div className="cal-buttons">
            <div className="numbers">
              <AmazingNumberButton hundleClickParent={hundleClick} />
            </div>
            <div className="operats">
              <GreatOperationButton hundleClickParent={hundleClick} />
            </div>
          </div>
          <div className="specials">
            <button className="save" onClick={() => {

            }}>SAVE</button>
            <MagnificientEqualButton equal={screen} hundleClickParent={handleResult} />
          </div>
        </div>
      </div>
      <div className="tableSave">

      </div>
    </div>
  )
}
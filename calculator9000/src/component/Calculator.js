/* eslint no-eval: 0 */

import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import '../style/Calculator.css';
import {useState} from "react"

export default function Calculator() {

  let [screen, setScreen] = useState('')
  let [over9000, setOver] = useState(false)
  let calc = [];
  let resultat = [];

  console.log(over9000)
  const hundleClick = (calcNumber) => {
    setScreen(screen + calcNumber)
    if (calcNumber === "AC") {
      setOver(false)
      setScreen('')
    }
    calc.push(screen + calcNumber)
    console.log(calc)
  }

  const handleResult = (result) => {
    if (result > 9000) {
      setOver(true)
    } else {
      setScreen(result)
      setOver(false)
      resultat.push(result)
    }
  }

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
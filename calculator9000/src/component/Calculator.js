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
  let [over9000, setOver] = useState('')

  const hundleClick = (calcNumber) => {
    setScreen(screen + calcNumber)
    if (calcNumber === "AC") {
      setScreen('')
    }
  };

  const handleResult = (result) => {
    if (result > 9000) {
      setScreen(result)
      setOver(over9000)
    } else {
      setScreen(result)
      setOver('')
    }
  }

  return (
    <div className="calculator9000">
      <TheTitle />
      <div className="cal-wrapper">
        <BeautifulScreen screenValue= {screen}/>
        <ItSOverNineThousand overValue= {screen} handleResultParent={handleResult}/>
        <div className="cal-buttons">
          <div className="numbers">
            <AmazingNumberButton hundleClickParent={hundleClick} />
          </div>
          <div className="operats">
            <GreatOperationButton hundleClickParent={hundleClick} />
          </div>
        </div>
        <div className="specials">
          <MagnificientEqualButton equal={screen} hundleClickParent={handleResult}/>
        </div>
      </div>
    </div>
  );
}
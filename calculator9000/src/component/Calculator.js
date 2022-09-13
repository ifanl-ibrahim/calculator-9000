import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import '../style/Calculator.css';

const tableNumber = [];
const tableOperate = [];
const tableEqual = [];

const numbers = ["AC", "C", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
numbers.map((number, index)=> (
  tableNumber.push(<AmazingNumberButton key={index} valNumber={number} />)
))

const operats = ["/", "x", "-", "+"]
operats.map((operate, index)=> (
  tableOperate.push(<GreatOperationButton key={index} valOperats={operate} />)
))

const equals = ["="]
equals.map((equal, index)=> (
  tableEqual.push(<MagnificientEqualButton key={index} valEquals={equal} />)
))

function Calculator() {
  return (
    <div className="calculator9000">
      <TheTitle />
      <div className="cal-wrapper">
        <BeautifulScreen />
        <div className="cal-buttons">
          <div className="numbers">
            { tableNumber }
          </div>
          <div className="operats">
            { tableOperate }
          </div>
        </div>
        <div className="specials">
          { tableEqual }
        </div>
      </div>
    </div>
  );
}

export default Calculator;
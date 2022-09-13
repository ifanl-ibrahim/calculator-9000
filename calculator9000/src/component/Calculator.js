import TheTitle from "./TheTitle";
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifulScreen from "./BeautifulScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import '../style/Calculator.css';

const tableNumber = [];
const tableOperate = [];
const tableEqual = [];

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "AC"]
numbers.map((number, index)=> (
  tableNumber.push(<AmazingNumberButton key={index} valNumber={number} />)
))

const operats = ["/", "*", "-", "+"]
operats.map((operate, index)=> (
  tableOperate.push(<GreatOperationButton key={index} valOperats={operate} />)
))

const equals = ["SAVE", "="]
equals.map((equal, index)=> (
  tableEqual.push(<MagnificientEqualButton key={index} valEquals={equal} />)
))

function Calculator() {
  return (
    <div className="calculator">
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
          <div className="equals">
            { tableEqual }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
import {useState} from "react";

const AmazingNumberButton = (props) => {

  const tableNumbers = ["AC", 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, "."];
  let numbers = '';

  const hundleClick = () => {
    props.hundleClickParent(numbers)
  };

  return (
    <div className="number">
      {
        tableNumbers.map((nbr, index) =>
          <button key={index} onClick={() => {
            numbers = numbers + nbr
            hundleClick()
          }}> {nbr} </button>
        )
      }
    </div>
  )
}

export default AmazingNumberButton;
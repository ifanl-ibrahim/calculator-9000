import {useState} from "react";

function GreatOperationButton(props) {

  const tableOperats = ['+', '-', '*', '/'];
  let operat = '';

  const hundleClick = () => { //fonction qui va récupéré l'information qui est dans calculator evoyer via hundleClickParent
    props.hundleClickParent(operat)
  };

  return (
    <div className="operation">
      {
        tableOperats.map((op, index) =>
          <button key={index} onClick={() => {
            operat = operat + op
            hundleClick()
          }}> {op} </button>
        )
      }
    </div>
  )
}

export default GreatOperationButton;
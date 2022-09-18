/* eslint no-eval: 0 */

function MagnificientEqualButton(props) {

    let equal = '=';

    const hundleResult = () => { //fonction qui va récupéré l'information qui est dans calculator evoyer via hundleClickParent
        props.hundleClickParent(equal)
    };

    return (
      <div className="equal">
        <button onClick={() => {
            equal = eval(props.equal) //eval fait les operations
            hundleResult()
        }}> = </button>
      </div>
    )
}

export default MagnificientEqualButton;
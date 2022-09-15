/* eslint no-eval: 0 */

function MagnificientEqualButton(props) {

    let equal = '=';

    const hundleResult = () => {
        props.hundleClickParent(equal)
    };

    return (
      <div className="equal">
        <button onClick={() => {
            equal = eval(props.equal)
            hundleResult()
        }}> = </button>
      </div>
    )
}

export default MagnificientEqualButton;
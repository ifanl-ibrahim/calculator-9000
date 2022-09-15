import React from "react";

function ItSOverNineThousand(props) {
    if (props.overValue === true) {
        return (
            <div className="9000">
                <p>It’s Over 9000 !!!</p>
            </div>
        )
    }
}

export default ItSOverNineThousand;
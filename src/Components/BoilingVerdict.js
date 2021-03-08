import React from "react"

function BoilingVerdict(props) {
    if (props.celsius <= 23) {
      return <p>Suhu badan dingin .</p>;
    }
    return <p>Suhu badan normal.</p>;
  }

  export default BoilingVerdict
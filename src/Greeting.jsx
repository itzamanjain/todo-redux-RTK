/* eslint-disable react/prop-types */
import React from "react"

const Greeting = ({userName,textColor}) => {
    const styles = {color:textColor}
  return (
    <div style={styles}>Hello , {userName}</div>
  )
}

export default Greeting
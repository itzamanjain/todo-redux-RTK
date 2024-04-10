import React from 'react'

const Product = ({title,price}) => {
    const style  = {backgroundColor: price > 4000 ? "yellow" : ""}
    
  return (
    <div style={style}>
    <div >title: {title}</div>
    <div>price: {price}</div>
    {/* {price>4000 && <p>You get discount of 5%</p>}
     */}
       {price > 30000 ? <p>you will get discount of 5%</p> : ""}

    <p>here prouct end <br /> +++++++++++++++</p>
    </div>
  )
}

export default Product
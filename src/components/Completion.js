import React from 'react'

export default function Completion (props) {
    const { pizza } = props

    return (
    <div>
        <h3>Review Your Order</h3>
        {pizza.map(myPizza => {
            return(
                <div key= {myPizza.id}>
                    <h4> Name: {myPizza.name} </h4>
                    <p> Size: {myPizza.size} </p>
                    {myPizza.pepperoni && <p>Pepperoni</p>}
                    {myPizza.sausage && <p>Sausage</p>}
                    {myPizza.mushroom && <p>Mushroom</p>}
                    {myPizza.onion && <p>Onion</p>}
                    <p> Special Instructions: {myPizza.instructions} </p>
                </div>
            )
        })}
    </div>
    )
}
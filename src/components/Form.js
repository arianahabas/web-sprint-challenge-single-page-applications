import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Form(props){
    const history = useHistory()

    const{name, size, pepperoni, sausage, mushroom, onion, instructions, handleChange, handleSubmit, disabled } = props
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Your Name:
                <input id='name' name='name' value={name} onChange={handleChange}/>
            </label>
            <label>
                Size:
                <select name='size' value={size} onChange={handleChange}>
                    <option value='s'>Small</option>
                    <option value='m'>Medium</option>
                    <option value='l'>Large</option>
                    <option value='xl'>X-Large</option>
                </select>
            </label>
            <label>
                Pepperoni:
                <input id='pepperoni' name='pepperoni' type='checkbox' checked={pepperoni} onChange={handleChange}/>
            </label>
            <label>
                Sausage:
                <input id='sausage' name='sausage' type='checkbox'checked={sausage} onChange={handleChange}/>
            </label>
            <label>
                Mushroom:
                <input id='mushroom' name='mushroom' type='checkbox'checked={mushroom} onChange={handleChange}/>
            </label>
            <label>
                Onion:
                <input id='onion' name='onion' type='checkbox'checked={onion} onChange={handleChange}/>
            </label>
            <label>
                Special Instructions
                <input id='instructions' name='instructions' type='textbox' value={instructions} onChange={handleChange}/>
            </label>
            <button id='submitButton' disabled={disabled} type='submit'>Place Order</button>
        </form>
    )
}
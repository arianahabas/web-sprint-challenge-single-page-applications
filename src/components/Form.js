import React from 'react'
import { useHistory } from 'react-router-dom'


export default function Form(props){
    const history = useHistory()

    const{name, size, pepperoni, sausage, mushroom, onion, instructions, handleChange } = props
    
    return(
        <form>
            <label>
                Your Name:
                <input name='name' value={name} onChange={handleChange}/>
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
                <input name='pepperoni' type='checkbox' checked={pepperoni} onChange={handleChange}/>
            </label>
            <label>
                Sausage:
                <input name='sausage' type='checkbox'checked={sausage} onChange={handleChange}/>
            </label>
            <label>
                Mushroom:
                <input name='mushroom' type='checkbox'checked={mushroom} onChange={handleChange}/>
            </label>
            <label>
                Onion:
                <input name='onion' type='checkbox'checked={onion} onChange={handleChange}/>
            </label>
            <label>
                Special Instructions
                <input name='instructions' type='textbox' value={instructions} onChange={handleChange}/>
            </label>
            <button onClick={()=> history.push('/complete')}>Place Order</button>
        </form>
    )
}
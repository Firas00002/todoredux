import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handle_add } from '../redux/actions'

const Addtodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const handlesubmit=(e)=>{
        e.preventDefault();
        const newtask={
        id:Math.random(),
        action:input,
        isShown:false,
        }
        dispatch(handle_add(newtask))
        setInput('')
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
             <h1>To do List</h1>   
                <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/> 
                <button >addtask</button>
            </form>
        </div>
    )
}

export default Addtodo

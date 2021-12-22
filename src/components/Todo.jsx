import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handledelete, handledone } from '../redux/actions'
import Edit from './Edit'

const Todo = () => {
    const {todo} = useSelector (state => state)
    const dispatch = useDispatch()
    return (
        <div>
            {todo.map((el,i)=> <li id={el.isShown?"Appp":""} key={i}>
             {el.action} 
             <div>
                 <button onClick={()=>dispatch(handledelete(el.id))}>Delete</button> 
             <button onClick={()=>dispatch(handledone(el.id))}>Done</button> 
            <Edit />
            </div>
             
            </li>)}
        </div>
    )
}

export default Todo

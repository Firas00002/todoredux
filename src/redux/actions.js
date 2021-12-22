import { HANDLEDELETE, HANDLEDONE, HANDLE_ADD } from "./actionTypes"

export const handledelete=(id)=>{
    return{
        type:HANDLEDELETE,
        payload:id
    }
}

export const handledone=(id)=>{
    return{
        type:HANDLEDONE,
        payload:id
    }
}

export const handle_add=(newtask,oldtask)=>{
    return{
        type:HANDLE_ADD,
        payload:newtask
        
    }
}
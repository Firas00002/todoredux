import { HANDLEDELETE,HANDLEDONE,HANDLE_ADD } from "./actionTypes";

const init ={todo:
   [                        { id: Math.random(), action: 'learn react hook',isShown:false },
                                      { id: Math.random(), action: 'learn react state' ,isShown:true},
                                      { id: Math.random(), action: 'learn react Router' ,isShown:false},
                                      { id: Math.random(), action: 'learn react Redux',isShown:true}]} 

                                      

const reducer =(state=init,{type,payload}) =>{
   switch (type) {
      case HANDLEDELETE:
         
         return{
            ...state,todo:state.todo.filter((el)=>el.id !==payload)
         }

         case HANDLEDONE:
            return{
               ...state,todo:state.todo.map((el)=>el.id===payload?{...el,isShown:!el.isShown}:el)

            }
   case HANDLE_ADD :
   return{
              ...state,todo:[...state.todo,payload]
   }
      default:
         return state
            
         
   }
}                                     

export default reducer



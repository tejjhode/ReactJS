import {createSlice,nanoid} from '@redux/toolkit'
const intialState = {
    todos:[{
        id:1,
        text:"hello"
    }]
}
export const todoSlice = createSlice({
    name : "todo",
    intialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id : nanoid(),
               text:action.playload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
         state.todos=state.todos.filter((todo)=>todo.id!==action.playload)
        },
    }
})

export const {addTodo,removeTodo}= todoSlice.action
export default todoSlice.reducers
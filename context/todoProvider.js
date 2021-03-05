import {useState,createContext} from 'react'
export const TodoContext = createContext();

export default function TodoProvider({childern}){
    const [todos,setTodos]=useState([
        {
            id:1,
            title:'Ir ao mercado',
            done:false,
        },
        {
            id:1,
            title:'Ir para a academia',
            done:false,
        },
        {
            id:1,
            title:'Ir ao medico',
            done:false,
        },
    ]);

    const saveTodo = todo =>{
        const newTodo ={
            id:todos.length+1,
            title:todo.tile,
            done:false,
        }
        setTodos({
            ...todos,newTodo })
    }

    return(
        <TodoContext.Provider value={{todos,saveTodo}}>
            {childern}
        </TodoContext.Provider>
    )
}
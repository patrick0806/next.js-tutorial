import { useContext } from "react"
import { TodoContext } from "../context/todoProvider"
import TodoListItem from "./todoListItem";

export default function TodoList(){
    const context = useContext(TodoContext);
    const data = context.todos.map(todo=>(
        <TodoListItem key={todo.item} todo={todo}/>
    ));
    console.log(context);
    return(
        <div>
            {data};
        </div>
    )
}
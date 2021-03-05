export default function TodoListItem({todo}){
    return(
        <div>
           {todo.id}-{todo.tile}-{todo.done ? "true": "falso"}
        </div>
    )
}
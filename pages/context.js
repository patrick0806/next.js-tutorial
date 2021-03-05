import TodoList from '../components/todoList'
import AddTodo from '../components/addTodo'
import TodoProvider from '../context/todoProvider'

export default function Context(){    

    return (
        <TodoProvider>
            <TodoList></TodoList>
            <AddTodo></AddTodo>
        </TodoProvider>
    );
}
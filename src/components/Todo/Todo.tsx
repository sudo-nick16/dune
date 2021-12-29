import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext';
import { todo, todos } from '../../Types'
import "./Todo.css"

interface TodoProps {
    todo : todo;
}

const Todo:React.FC<TodoProps> = ({todo}: TodoProps) => {

    const state = useContext(AppContext);

    const completedTodo = () => {
        state?.setTodos((todos: todos[]) => {
            const temp = [...todos]
            const index = temp.findIndex(list => list.name === state?.currentList)
            temp[index].todos.forEach((item, index) => {
                if(item.content === todo.content){
                    item.id = !item.id
                }
            })
            return temp
        })
    }

    return (
        <li className={`todo-container${todo.id ? " completed" : ""}`} onClick={completedTodo}>
            {todo.content}
        </li>
    )
}

export default Todo

import React from 'react'
import { todo } from '../../Types'
import "./Todo.css"

interface TodoProps {
    todo : todo;
}

const Todo:React.FC<TodoProps> = ({todo}: TodoProps) => {
    return (
        <li className='todo-container'>
            {todo.content}
        </li>
    )
}

export default Todo

import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { todo } from '../../Types';
import Todo from '../Todo/Todo';
import plus from "../../images/plus.png"
import "./TodoList.css"
import { useParams } from 'react-router-dom';

const TodoList:React.FC = () => {
    const state = useContext(AppContext);
    const [list, setList] = useState<todo[]>([])
    const params = useParams();
    
    useEffect(() => {
        const temp = state?.todos.find(list => list.name === state?.currentList)?.todos || []
        setList(temp)
        console.log(temp)
    },[params])

    return (
        <ul className='todolist-container'>
            {
                state?.todos.find(list => list.name === state?.currentList)?.todos.map((todo, index) => 
                    <Todo key={index} todo={todo} />
                )
            }
            <div className='todo-container add'>
                <img src={plus} alt="" />
            </div>
        </ul>
    )
}

export default TodoList
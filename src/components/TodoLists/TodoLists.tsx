import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext';
import './TodoLists.css'
import { useNavigate } from 'react-router-dom';
import plus from "../../images/plus.png"
import { todos } from '../../Types';


const TodoLists: React.FC = () => {
    const navigate = useNavigate();
    const state = useContext(AppContext);


    const listClickHandler = (list: todos): void => {
        navigate(`/${list.slug}`);
        state?.setCurrentList(list.name);
    }

    return (
        <div className='todo-lists-container'>
            <div className='list-names'>
                {
                    state?.todos.map((todolist, index) => 
                        <div className='todolist-box' onClick={() => listClickHandler(todolist)}>
                            <p>{todolist.name}</p>
                        </div>
                    )
                }
                <div className='todolist-box' onClick={() => listClickHandler({name: "create-list", slug: "create-list", todos: []})}>
                    <img src={plus} alt="add" />
                </div>
            </div>
        </div>
    )
}

export default TodoLists

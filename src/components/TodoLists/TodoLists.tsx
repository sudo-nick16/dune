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
                        <div className='todolist-box' onClick={() => listClickHandler(todolist)} 
                            key={index}
                            onContextMenu={(e) => {
                            window.confirm("Are you sure you want to delete this list?") && state?.setTodos((todos: todos[]) => {
                                const temp = [...todos]
                                const index = temp.findIndex(list => list.name === todolist.name)
                                temp.splice(index, 1)
                                console.log(index)
                                // if(temp.length === 0){
                                //     return []
                                // }
                                return temp
                            })
                            e.preventDefault()
                        }}>
                            <p>{todolist.name}</p>
                        </div>
                    )
                }
                <div className='todolist-box' onClick={() => listClickHandler({name: "create list", slug: "create-list", todos: []})}>
                    <img src={plus} alt="add" />
                </div>
            </div>
        </div>
    )
}

export default TodoLists

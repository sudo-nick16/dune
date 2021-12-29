import React, { useContext, useEffect, useRef, useState } from 'react'
import AppContext from '../../Context/AppContext'
import { todo, todos } from '../../Types';
import Todo from '../Todo/Todo';
import plus from "../../images/plus.png"
import "./TodoList.css"
import { useParams } from 'react-router-dom';

const TodoList:React.FC = () => {
    const state = useContext(AppContext);
    const [list, setList] = useState<todo[]>([])
    const [todoInput, setTodoInput] = useState(false);
    const params = useParams();
    const inputRef = useRef<HTMLInputElement>(null);
    const [todo, setTodo] = useState<string>('');
    
    useEffect(() => {
        const temp = state?.todos.find(list => list.name === state?.currentList)?.todos || []
        setList(temp)
        console.log(temp)
    },[params])

    const plusImgHandler = (): void => {
        setTodoInput(true)
        setTimeout(() =>{
            inputRef.current?.focus()
        },300)
    }

    const addTodo = () : void => {
        if(state?.currentList === 'create list'){
            alert("Please create a list first..")
            return
        }
        if(todo && state?.currentList !== 'create list'){
            state?.setTodos((todos: todos[]) => {
                const temp = [...todos]
                const index = temp.findIndex(list => list.name === state?.currentList)
                temp[index].todos.push({id: false, content: todo})
                return temp
            })
        }
        setTodoInput(false)
    }

    return (
        <ul className='todolist-container'>
            {
                state?.todos.find(list => list.name === state?.currentList)?.todos.map((todo, index) => 
                    <Todo key={index} todo={todo} />
                )
            }
            {
                todoInput?
                <li className='todo-container'>
                    <input ref={inputRef} type="text" placeholder='do something..' 
                    onKeyUp={(e) => {
                        if(e.key === 'Enter'){
                            addTodo();
                            setTodoInput(false)
                        }
                    }}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }} />
                </li>
                : 
                null

            }
            <div className='todo-container add'>
                <img src={plus} alt="" onClick={plusImgHandler} />
            </div>
        </ul>
    )
}

export default TodoList
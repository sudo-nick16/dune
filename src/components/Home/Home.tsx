import React, { createRef, useContext, useEffect, useState } from 'react'
import "./Home.css"
import folder from "../../images/green-folder.png"
import AppContext from '../../Context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { todos } from '../../Types'

const Home:React.FC = () => {

    const navigate = useNavigate();
    const state = useContext(AppContext)
    console.log(state)
    const inputRef = createRef<HTMLInputElement>();
    const params = useParams();
    const [listName, setListName] = useState<string>("")
     
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
        console.log(params)
        state?.setCurrentList(window.location.pathname.split('/')[1].split('-').join(' '))
    }, [params])

    const addList = (): void => {
        state?.setTodos((todos: todos[]) => {
            const temp = [...todos]
            temp.push({name: listName, slug: listName.split(' ').join('-'), todos: []})
            return temp
        })
        state?.setCurrentList(listName)
        navigate(`/${listName.split(' ').join('-')}`)
    }

    return (
        <>
            <div className='home-container'>
                <div className="header">
                    <img src={folder} alt="folder-img" />
                    <h1>Dune</h1>
                </div>
                <div className='route'>
                    <img src={folder} alt="folder-img" />
                    <h2>
                        <span onClick={() => {navigate('/');state?.setCurrentList('')}}>dune</span> / &nbsp;
                        {
                            state?.currentList !== 'create list' ?
                            <span>{state?.currentList}</span> 
                            :
                            <input ref={inputRef} type="text" placeholder='Todo before school..'
                            onKeyUp={(e) => {
                                if(e.key === 'Enter'){
                                    addList();
                                }
                            }}
                            onChange={(e) => {
                                setListName(e.target.value)
                            }} />
                        }
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home

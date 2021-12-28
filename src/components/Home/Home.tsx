import React, { createRef, useContext, useEffect } from 'react'
import "./Home.css"
import folder from "../../images/green-folder.png"
import AppContext from '../../Context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Home:React.FC = () => {

    const navigate = useNavigate();
    const state = useContext(AppContext)
    console.log(state)
    const inputRef = createRef<HTMLInputElement>();
    const params = useParams();
    
    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }, [params])

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
                            state?.currentList !== 'create-list' ?
                            <span>{state?.currentList}</span> 
                            :
                            <input ref={inputRef} type="text" placeholder='Todo before school..' />
                        }
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home

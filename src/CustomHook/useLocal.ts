import React, { useEffect, useState } from 'react'
import { todos } from '../Types'

const useLocal = (prop: todos[]):[todos[], React.Dispatch<React.SetStateAction<todos[]>>] => {

    const [value, setValue] = useState(prop || [])

    useEffect(() => {
        if(value.length > 0) {
            localStorage.setItem('todos', JSON.stringify(value))
        }
    },[value])

    return [value, setValue]
}

export default useLocal

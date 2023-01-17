import React, { useState } from 'react'
import NewTodo from './NewTodo'
import Todos from './Todos'

const Home = () => {
    const dumyTodos = ['todo1','todo2'];
    const [todos,setTodos] = useState(dumyTodos);
    const handleAddTodo = (newTodo) => {
        setTodos([...todos,newTodo]);
    }
    return (
        <div>
            <NewTodo newTodo={handleAddTodo}/>
            <Todos todos={todos}/>
        </div>
    )
}

export default Home
import React, { useState } from 'react'

const NewTodo = (props) => {
    const [todo,setTodo] = useState("");
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    const handleNewitem = (event) => {
        event.preventDefault();
        props.newTodo(todo);
    }
    return (
        <div>
            <form onSubmit={handleNewitem}>
                <label htmlFor='todo'>New Todo:</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={todo} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodo
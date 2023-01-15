import React, { useState } from 'react'

export default function USESTATE_HOOKS() {
    const [count,setCount] = useState(0);
    const handlerBinding = () => {
        setCount(count + 1)
    }
    const handlerBindingDecrese = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handlerBinding}>Increse</button>
            <button onClick={handlerBindingDecrese}>Deccrese</button>
        </div>
    )
}

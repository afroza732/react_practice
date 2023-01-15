
import React from 'react'

export default function Child(props) {
    const data = "I am parent data app";
    props.onChildData(data);
    return (
        <div>
            <p>I am child Component</p>
        </div>
    )
}

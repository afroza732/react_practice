import React from "react";
import { v4 as uuidv4 } from 'uuid';
const todos = [
    {
        "id"    : uuidv4(),
        "title" : "Title 1",
        "desc"  : "Accusam dolore voluptua nonumy et ut consetetur justo, lorem stet kasd elitr clita lorem, consetetur ea gubergren sit magna amet."
    },
    {
        "id"    : uuidv4(),
        "title" : "Title 2",
        "desc"  : "Accusam dolore voluptua nonumy et ut consetetur justo, lorem stet kasd elitr clita lorem, consetetur ea gubergren sit magna amet."
    },
    {
        "id"    : uuidv4(),
        "title" : "Title 3",
        "desc"  : "Accusam dolore voluptua nonumy et ut consetetur justo, lorem stet kasd elitr clita lorem, consetetur ea gubergren sit magna amet."
    },
    {
        "id"    : uuidv4(),
        "title" : "Title 4",
        "desc"  : "Accusam dolore voluptua nonumy et ut consetetur justo, lorem stet kasd elitr clita lorem, consetetur ea gubergren sit magna amet."
    },
    {
        "id"    : uuidv4(),
        "title" : "Title 5",
        "desc"  : "Accusaam dolore voluptua nonumy et ut consetetur justo, lorem stet kasd elitr clita lorem, consetetur ea gubergren sit magna amet."
    }
];
const List = () => {
    return <>
        {
            todos.map((todo,index) => {
                const {id,title,desc} = todo;
                return <div key={id}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            })
        }
    </>
};

export default List;
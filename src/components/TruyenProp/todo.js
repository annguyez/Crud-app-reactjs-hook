import React, { useState } from 'react';
import TodoItem from './todoItem';
 

export default function Todo() {
    const [state, setstate] = useState(['A','B','C']);
    return (
        <div>
            {state.map(a=>{
                return <TodoItem b={a}/>;
            })}
        </div>
    )
}

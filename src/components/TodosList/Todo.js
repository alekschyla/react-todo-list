import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';


const Todo = ({todo, onClick}) => {
    const todoStyle = {
        width: '50%',
        margin: '0 auto',
        padding: '10px',
        borderBottom: '1px solid grey',
        textDecoration: todo.isCompleted ? 'line-through' : 'none'
    };

    return (
        <div
            style={todoStyle}
        >
            <Checkbox
                checked={todo.isCompleted}
                onChange={onClick}
            />
            <span>{todo.text}</span>
        </div>
    );
};

export default Todo;
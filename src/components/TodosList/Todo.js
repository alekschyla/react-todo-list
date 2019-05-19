import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';


const Todo = ({todo, todos, index, onClick}) => {
    const todoStyle = {
        width: '50%',
        margin: '0 auto',
        padding: '10px',
        borderBottom: index !== todos.length - 1 ? '1px solid grey' : 'none',
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
            <span>{todo.todoText}</span>
        </div>
    );
};

export default Todo;
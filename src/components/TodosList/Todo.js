import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Todo = ({todo, todos, index, toggleTodo, deleteTodo, clickTodo, isOneOfTodoIsEditing}) => {
    const todoStyle = {
        width: '50%',
        margin: '0 auto',
        padding: '10px 0',
        borderBottom: index !== todos.length - 1 ? '1px solid grey' : 'none',
        textDecoration: todo.isCompleted ? 'line-through' : 'none'
    };
    const checkerAndButtonStyle = {
        width: '20px',
    };

    const clickTodoToEdit = () => {
        if (!isOneOfTodoIsEditing) {
            clickTodo();
        }
    };

    return (
        <table
            style={todoStyle}
        >
            <tbody>
            <tr>
                <td
                    style={checkerAndButtonStyle}
                >
                    <Checkbox
                        checked={todo.isCompleted}
                        onChange={toggleTodo}
                    />
                </td>
                <td
                    onClick={clickTodoToEdit}
                >
                    <span>{todo.todoText}</span>
                </td>
                <td
                style={checkerAndButtonStyle}
                >
                    <IconButton
                        style={{float: 'right'}}
                        color="primary"
                        onClick={deleteTodo}
                    >
                        <DeleteIcon/>
                    </IconButton>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default Todo;
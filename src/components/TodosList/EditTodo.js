import React from 'react';

import TextField from '@material-ui/core/TextField';


const Todo = (props) => {
    const divStyle = {
        margin: '0 auto',
        width: '50%',
    };
    const editTodoStyle = {
        width: '100%',
    };

    return (
        <div
            style={divStyle}
        >
            <TextField
                style={editTodoStyle}
                defaultValue={props.todoText}
                value={props.editTodoText}
                //onChange={event => this.props.handleChangeTodoText(event.target.value)}
                margin="normal"
            />
        </div>
    );
};

export default Todo;
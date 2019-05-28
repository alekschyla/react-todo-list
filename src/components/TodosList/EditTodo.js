import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
                value={props.editTodoText}
                onChange={event => props.handleChangeEditTodoText(event.target.value)}
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
            >
                Zapisz
            </Button>
        </div>
    );
};

export default Todo;
import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const Todo = (props) => {
    const divStyle = {
        margin: '0 auto',
        width: '50%',
    };
    const editTodoStyle = {
        width: '100%',
    };
    const linkStyle = {
        marginLeft: '10px'
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
                onClick={props.editTodo}
            >
                Zapisz
            </Button>
            <Link
                style={linkStyle}
                onClick={props.exitTodo}
            >
                Anuluj
            </Link>
        </div>
    );
};

export default Todo;
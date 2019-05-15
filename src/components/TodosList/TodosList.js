import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

const TodosList = (props) => {
    const todoStyle = {
        width: '50%',
        margin: '0 auto',
        padding: '10px',
        borderBottom: '1px solid grey',
        textDecoration: 'none'
    };

    const checkedTodoStyle = {
        width: '50%',
        margin: '0 auto',
        padding: '10px',
        borderBottom: '1px solid grey',
        textDecoration: 'line-through'
    };

    return (
        <div>
            {
                props.todos &&
                    props.todos.map(
                        (todo, index) => (
                            <div
                                style={todo.isCompleted ? checkedTodoStyle : todoStyle}
                                key={todo+index}
                            >
                                <Checkbox
                                    checked={todo.isCompleted}
                                    onChange={() => props.handleChangeIsTodoCompleted(index)
                                    }
                                />
                                <span>{todo.text}</span>
                            </div>
                        )
                    )
            }
        </div>
    );
};


export default TodosList;
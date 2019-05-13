import React from 'react';

const todoStyle = {
    width: '50%',
    margin: '0 auto',
    padding: '15px',
    borderBottom: '1px solid grey',
};

const TodosList = (props) => {
    return (
        <div>
            {
                props.todos &&
                    props.todos.map(
                        (todo, index) => (
                            <div
                                style={todoStyle}
                                key={todo+index}
                            >
                                {todo}
                            </div>
                        )
                    )
            }
        </div>
    );
};

export default TodosList;
import React from 'react';

const EmptyTodoList = () => {
    const emptyListStyle = {
        width: '50%',
        textAlign: 'center',
        margin: '0 auto',
        padding: '10px',
        color: 'grey',
    };

    return (
        <div
        style={emptyListStyle}
        >
            Ta lista jest pusta.
        </div>
    );
};

export default EmptyTodoList;
import React from 'react';
import Todo from "./Todo";


const TodosList = (props) => {

    return (
        <div>
            {
                props.todos &&
                    props.todos.map(
                        (todo, index) => (
                            <Todo
                                todo={todo}
                                onClick={() => props.toggleTodo(todo.id)}
                                key={todo.id}
                            />
                        )
                    )
            }
        </div>
    );
};


export default TodosList;
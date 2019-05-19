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
                                todos={props.todos}
                                index={index}
                                onClick={() => props.toggleTodo(todo.todoId)}
                                key={todo.todoId}
                            />
                        )
                    )
            }
        </div>
    );
};


export default TodosList;
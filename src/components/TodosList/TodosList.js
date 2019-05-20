import React from 'react';
import Todo from "./Todo";
import EmptyTodoList from "./EmptyTodoList";


const TodosList = (props) => {

    return (
        <div>
            {
                props.todos.length !== 0 ?
                    props.todos.map(
                        (todo, index) => (
                            <Todo
                                todo={todo}
                                todos={props.todos}
                                index={index}
                                toggleTodo={() => props.toggleTodo(todo.todoId)}
                                deleteTodo={() => props.deleteTodo(todo.todoId)}
                                key={todo.todoId}
                            />
                        )
                    )
                    :
                    <EmptyTodoList/>
            }
        </div>
    );
};


export default TodosList;
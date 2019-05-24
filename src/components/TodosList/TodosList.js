import React from 'react';
import Todo from "./Todo";
import EmptyTodoList from "./EmptyTodoList";
import EditTodo from "./EditTodo"

const TodosList = (props) => {
    return (
        <div>
            {
                props.todos.length !== 0 ?
                    props.todos.map(
                        (todo, index) => (
                            todo.isEditing ?
                                <EditTodo
                                    editTodoText={props.editTodoText}
                                    todoText={todo.todoText}
                                />
                                :
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
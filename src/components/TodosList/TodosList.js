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
                                    key={todo.todoId}
                                    editTodoText={props.editTodoText}
                                    todoText={todo.todoText}
                                    handleChangeEditTodoText={props.handleChangeEditTodoText}
                                />
                                :
                                <Todo
                                    todo={todo}
                                    todos={props.todos}
                                    index={index}
                                    toggleTodo={() => props.toggleTodo(todo.todoId)}
                                    deleteTodo={() => props.deleteTodo(todo.todoId)}
                                    clickTodo={() => props.clickTodo(todo.todoId, todo.todoText)}
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
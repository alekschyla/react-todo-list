const uuidv4 = require('uuid/v4');

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const CLICK_TODO = 'todos/CLICK_TODO';
const EDIT_TODO = 'todos/EDIT_TODO';
const EXIT_TODO = 'todos/EXIT_TODO';

export const addTodoActionCreator = (todoText) => ({
    type: ADD_TODO,
    todoText
});
export const toggleTodoActionCreator = todoId => ({
    type: TOGGLE_TODO,
    todoId
});
export const deleteTodoActionCreator = todoId => ({
   type: DELETE_TODO,
   todoId
});
export const clickTodoActionCreator = todoId => ({
    type: CLICK_TODO,
    todoId
});
export const editTodoActionCreator = (todoId, todoNewText) => ({
    type: EDIT_TODO,
    todoId,
    todoNewText
});
export const exitTodoActionCreator = todoId => ({
    type: EXIT_TODO,
    todoId
});

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    const newTodo = {
        todoId: uuidv4(),
        todoText: action.todoText,
        isCompleted: false,
        isEditing: false,
    };

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.todoId === action.todoId) ? {...todo, isCompleted: !todo.isCompleted} : todo)
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.todoId !== action.todoId)
            };

        case CLICK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.todoId === action.todoId) ? {...todo, isEditing: true} : todo)
            };

        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(
                    todo => (todo.todoId === action.todoId) ?
                        {...todo, todoText: action.todoNewText, isEditing: false}
                        :
                        todo
                )
            };

        case EXIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => (todo.todoId === action.todoId) ? {...todo, isEditing: false} : todo)
            };

        default:
            return state;
    }
};
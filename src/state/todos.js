const uuidv4 = require('uuid/v4');

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';

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

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    const newTodo = {
        todoId: uuidv4(),
        todoText: action.todoText,
        isCompleted: false
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

        default:
            return state;
    }
};
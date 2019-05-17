const uuidv4 = require('uuid/v4');

const ADD = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const addTodoActionCreator = (text) => ({
    type: ADD,
    text
});
export const toggleTodoActionCreator = id => ({
    type: TOGGLE_TODO,
    id
});

const initialState = {
    todos: [],
};

export default (state = initialState, action) => {
    const newTodo = {
        id: uuidv4(),
        text: action.text,
        isCompleted: false
    };

    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    (todo.id === action.id)
                        ? {...todo, isCompleted: !todo.isCompleted}
                        : todo
                )
            };

        default:
            return state;
    }
};
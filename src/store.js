import {createStore, combineReducers} from 'redux';
import todos from './state/todos';

const reducers = combineReducers({
    todos
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
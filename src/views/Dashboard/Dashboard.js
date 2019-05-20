import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from "../../components/AddTodo";
import TodosList from "../../components/TodosList";
import {addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator} from '../../state/todos';

class Dashboard extends Component {
    state = {
        newTodoText: '',
    };

    componentDidMount() {
        document.addEventListener('keypress', this.addTodo)
    }

    handleChangeTodoText = (newTodoText) => {
        this.setState({newTodoText})
    };

    addTodo = (event) => {
        if (event.keyCode === 13) {
            this.props._addTodo(this.state.newTodoText);
            this.setState({newTodoText: ''})
        }
    };

    render() {
        return (
            <div>
                <AddTodo

                    handleChangeTodoText={this.handleChangeTodoText}
                    todoText={this.state.newTodoText}
                />

                <TodosList
                todos={this.props._todos}
                toggleTodo={this.props._toggleTodo}
                deleteTodo={this.props._deleteTodo}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    _todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
    _addTodo: (text) => dispatch(addTodoActionCreator(text)),
    _toggleTodo: (id) => dispatch(toggleTodoActionCreator(id)),
    _deleteTodo: (id) => dispatch(deleteTodoActionCreator(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
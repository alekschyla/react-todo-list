import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from "../../components/AppBar";
import TodosList from "../../components/TodosList";
import {addTodoActionCreator, deleteTodoActionCreator, toggleTodoActionCreator} from '../../state/todos';
import AddTodo from "../../components/AddTodo";

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
                <AppBar/>

                <TodosList
                todos={this.props._todos}
                toggleTodo={this.props._toggleTodo}
                deleteTodo={this.props._deleteTodo}
                />

                <AddTodo
                    handleChangeTodoText={this.handleChangeTodoText}
                    todoText={this.state.newTodoText}
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
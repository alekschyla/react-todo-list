import React, {Component} from 'react';
import {connect} from 'react-redux';
import AppBar from "../../components/AppBar";
import TodosList from "../../components/TodosList";
import {addTodoActionCreator,
    deleteTodoActionCreator,
    toggleTodoActionCreator,
    editTodoActionCreator} from '../../state/todos';
import AddTodo from "../../components/AddTodo";

class Dashboard extends Component {
    state = {
        newTodoText: '',
        editTodoText: '',
    };

    componentDidMount() {
        document.addEventListener('keypress', this.addTodo)
    }

    handleChangeTodoText = (newTodoText) => {
        this.setState({newTodoText})
    };

    addTodo = (event) => {
        const ENTER = 13;
        if (event.keyCode === ENTER) {
            this.props._addTodo(this.state.newTodoText);
            this.setState({newTodoText: ''})
        }
    };

    editTodo = () => {

    };

    render() {
        return (
            <div>
                <AppBar/>

                <TodosList
                    todos={this.props._todos}
                    toggleTodo={this.props._toggleTodo}
                    deleteTodo={this.props._deleteTodo}
                    editTodoText={this.state.editTodoText}
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
    _deleteTodo: (id) => dispatch(deleteTodoActionCreator(id)),
    _editTodo: (id, editTodoText) => dispatch(editTodoActionCreator(id, editTodoText))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
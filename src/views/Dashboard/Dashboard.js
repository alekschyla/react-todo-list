import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from "../../components/AddTodo";
import TodosList from "../../components/TodosList";


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
        const todo = {
            text: this.state.newTodoText,
            isCompleted: false,
        };

        if (event.keyCode === 13) {
            this.setState({todos: this.state.todos.concat(todo)});
            this.setState({newTodoText: ''});
        }
    };

    handleChangeIsTodoCompleted = (index) => {
        this.state.todos[index].isCompleted = !this.state.todos[index].isCompleted;
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                <AddTodo
                    handleChangeTodoText={this.handleChangeTodoText}
                    text={this.state.newTodoText}
                />
                <TodosList
                todos={this.state.todos}
                handleChangeIsTodoCompleted={this.handleChangeIsTodoCompleted}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
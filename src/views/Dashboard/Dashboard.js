import React, {Component} from 'react';
import AddTodo from "../../components/AddTodo";
import TodosList from "../../components/TodosList";


class Dashboard extends Component {
    state = {
        newTodoText: '',
        todos: [],
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

    handleChangeIsTodoCompleted = (event) => {
        
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

export default Dashboard;
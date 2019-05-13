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

    handleChange = (newTodoText) => {
        this.setState({newTodoText})
    };

    addTodo = (event) => {
        if (event.keyCode === 13) {
            this.setState({todos: this.state.todos.concat(this.state.newTodoText)});
            this.setState({newTodoText: ''});
        }
    };

    render() {
        return (
            <div>
                <AddTodo
                    handleChange={this.handleChange}
                    text={this.state.newTodoText}
                />
                <TodosList/>
            </div>
        );
    }
}

export default Dashboard;
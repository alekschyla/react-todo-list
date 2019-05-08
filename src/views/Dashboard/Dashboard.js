import React, {Component} from 'react';
import AddTodo from "../../components/AddTodo";
import TodosList from "../../components/TodosList";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodosList/>
            </div>
        );
    }
}

export default Dashboard;
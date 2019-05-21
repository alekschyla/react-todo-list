import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';

class AddTodo extends Component {
    divStyle = {
        width: '50%',
        margin: '0 auto',
    };

    searchStyle = {
        width: '100%',
    };

    render() {
        return (
            <div
            style={this.divStyle}
            >
                <TextField
                    style={this.searchStyle}
                    value={this.props.todoText}
                    placeholder={'Dodaj tekst'}
                    onChange={event => this.props.handleChangeTodoText(event.target.value)}
                    margin="normal"
                />
            </div>
        );
    }
}

export default AddTodo;
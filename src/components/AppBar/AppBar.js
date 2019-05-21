import React from 'react';
import MUIAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    toolbar: {
        margin: '0',
    }
});

class AppBar extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
            >
                <MUIAppBar
                    position="static"
                >
                    <Toolbar
                        className={classes.toolbar}
                    >
                        <Typography
                            className={classes.title}
                            variant="h6"
                            color="inherit"
                            noWrap
                        >
                            TodoList
                        </Typography>
                    </Toolbar>
                </MUIAppBar>
            </div>
        );
    }
}

export default withStyles(styles)(AppBar);
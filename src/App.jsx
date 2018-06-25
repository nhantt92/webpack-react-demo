import React, {Component} from "react";
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx'
import './App.scss';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Button from '@material-ui/core/Button';
const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    AppBar: {
        height: 50,
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Header></Header>
                <Menu />
            </MuiThemeProvider>
        );
    }
}
export default App;

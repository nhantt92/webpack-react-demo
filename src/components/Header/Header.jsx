import React, { Component } from 'react';
import './Header.scss';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { MenuItem } from 'material-ui';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class Login extends Component {
    static muiName = 'FlatButton';
    render() {
        return  (
            <FlatButton {...this.props} label="Login"/>
        );
    }
}

const Logged = (props) => (
    
    <IconMenu
        {...props}
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign Out"/>
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {
    state = {
        logged: true,
    }
    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };
    render() {
        return (
            <div>
                <Toggle
                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={{margin:20}}
                    />
                <AppBar
                    title="Title"
                    iconElementLeft={<IconButton><NavigationClose/></IconButton>}
                    iconElementRight={this.state.logged ? <Logged/> : <Login/>}
                />
            </div>
        )
    }
}

export default Header;

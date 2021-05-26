import React, { Component } from "react"
import "./Header.css";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "../../assets/logo.svg";
import Model from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0 }}>
            {props.children}
        </Typography>
    );
}
class Header extends Component {
    constructor() {
        super();
      
        this.state = {
            modelIsOpen: false,
            value: 0
        }
    }
    openModelHandler = () => {
        this.setState({ modelIsOpen: true })
    }

    closeModelHandler = () => {
        this.setState({ modelIsOpen: false })
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }

   
    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModelHandler}>
                            Login
                    </Button>
                    </div>
                </header>
                <Model ariaHideApp={false} isOpen={this.state.modelIsOpen} contentLabel="Login" onRequestClose={this.closeModelHandler}  style={this.customStyles}>

                    <Tabs value={this.state.value} centered onChange={this.tabChangeHandler}>
                        <Tab label='Login' />
                        <Tab label='Register' />
                    </Tabs>
                    <TabContainer >
                        <FormControl required>
                            <InputLabel htmlFor='userName' >User Name</InputLabel>
                            <Input id ='userName' type ='text' />
                            
                        </FormControl>
                        <FormControl required>
                        <InputLabel htmlFor='password' >Password</InputLabel>
                            <Input id ='password' type ='password' />
                        </FormControl>
                    </TabContainer>
                </Model>
            </div>
        )
    }
}

export default Header;
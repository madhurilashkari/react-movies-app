import React, { Component } from "react"
import "./Header.css";
import Button from '@material-ui/core/Button';
import logo from "../../assets/logo.svg";
import Model from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

    tabChangeHandler =(event ,value) =>{
        this.setState({value})
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
                <Model ariaHideApp={false} isOpen={this.state.modelIsOpen} contentLabel="Login" onRequestClose={this.closeModelHandler}>
                    <Tabs value={this.state.value} onChange ={this.tabChangeHandler}>
                        <Tab label='Login' />
                        <Tab label='Register' />
                    </Tabs>
                </Model>
            </div>
        )
    }
}

export default Header;
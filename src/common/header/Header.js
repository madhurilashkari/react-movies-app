import React, { Component } from "react"
import "./Header.css";
import Button from '@material-ui/core/Button';
import logo from "../../assets/logo.svg";
import Model from 'react-modal';

class Header extends  Component {
    constructor(){
        super();
        this.state ={
            modelIsOpen : false
        }
    }
    openModelHandler =() =>{
        this.setState({modelIsOpen:true})
    }

    closeModelHandler =() =>{
        this.setState({modelIsOpen:false})
    }
    render(){
        return (
            <div>
            <header className="app-header">
                <img src ={logo} className ="app-logo" alt="logo" />
                <div className="login-button">
                    <Button variant="contained" color="default" onClick ={this.openModelHandler}>
                        Login
                    </Button>
                </div>
            </header>
            <Model ariaHideApp= {false} isOpen={this.state.modelIsOpen} contentLabel="Login" onRequestClose={this.closeModelHandler}>

            </Model>
        </div>
        )
    }
}

export default Header;
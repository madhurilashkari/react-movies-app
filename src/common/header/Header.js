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
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';
import ReactDOM from 'react-dom';
import BookShow from "../../screens/bookShow/BookShow";

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
        <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {
    constructor() {
        super();

        this.state = {
            modelIsOpen: false,
            value: 0,
            usernameRequired: "dispNone",
            username: "",
            loginPasswordRequired :"dispNone",
            loginPassword : "",
            firstnameRequired :"dispNone",
            firstName : "",
            lastnameRequired :"dispNone",
            lastName : "",
            emailRequired :"dispNone",
            email: "",
            registerPasswordRequired : "dispNone",
            registerPassword : "",
            contactnoRequired :"dispNone",
            contactNo : ""
        }
    }
    openModelHandler = () => {
        this.setState({ modelIsOpen: true,
                        usernameRequired :"dispNone",
                         value :0,
                         loginPasswordRequired: "dispNone",
                         loginPassword: "",
                         firstnameRequired: "dispNone",
                         firstName: "",
                         lastnameRequired: "dispNone",
                         lastName: "",
                         emailRequired: "dispNone",
                         email: "",
                         registerPasswordRequired: "dispNone",
                         registerPassword: "",
                         contacnoRequired: "dispNone",
                         contactNo: ""
         });
    }

    closeModelHandler = () => {
        this.setState({ modelIsOpen: false })
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value })
    }

    loginClickHandler =() =>{
        this.state.username === "" ? this.setState({usernameRequired :"dispBlock"}) : this.setState({usernameRequired :"dispNone"});
        this.state.loginPassword === "" ? this.setState({loginPasswordRequired :"dispBlock"}) : this.setState({loginPasswordRequired :"dispNone"});
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

    inputFirstnameChangeHandler =(e) =>{
        this.setState({ firstName: e.target.value });
    }
    inputLastnameChangeHandler =(e) =>{
        this.setState({ lastName: e.target.value });
    }
    inputemailChangeHandler =(e) =>{
        this.setState({ email: e.target.value });
    }

    inputRegisterPasswordChangeHandler =(e) =>{
        this.setState({ registerPassword: e.target.value });
    }

    inputcontactnoChangeHandler =(e) =>{
        this.setState({ contactNo: e.target.value });
    }
    
    registerClickHandler =() =>{
        this.state.firstName === "" ? this.setState({firstnameRequired :"dispBlock"}) : this.setState({firstnameRequired :"dispNone"});
        this.state.lastName === "" ? this.setState({lastnameRequired :"dispBlock"}) : this.setState({lastnameRequired :"dispNone"});
        this.state.email === "" ? this.setState({emailRequired :"dispBlock"}) : this.setState({emailRequired :"dispNone"});
        this.state.registerPassword === "" ? this.setState({registerPasswordRequired :"dispBlock"}) : this.setState({registerPasswordRequired :"dispNone"});
        this.state.contactNo === "" ? this.setState({contactnoRequired :"dispBlock"}) : this.setState({contactnoRequired :"dispNone"});
    }

    bookShowHandler = (e) => {
       ReactDOM.render(<BookShow />, document.getElementById('root'));
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
                    {this.props.showBookShowButton === "true" ?
                        <div className="bookshow-button">
                            <Button variant="contained" color="primary" onClick={this.bookShowHandler}>
                                Book Show
                            </Button>
                        </div>
                        : ""}
                </header>
                <Model ariaHideApp={false} isOpen={this.state.modelIsOpen} contentLabel="Login" onRequestClose={this.closeModelHandler} style={customStyles} >

                    <Tabs className="tabs" value={this.state.value} centered onChange={this.tabChangeHandler}>
                        <Tab label='Login' />
                        <Tab label='Register' />
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer >
                            <FormControl required>
                                <InputLabel htmlFor='userName' >User Name</InputLabel><br />
                                <Input id='userName' type='text' username={this.state.username}  onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl><br /><br />
                            <FormControl required>
                                <InputLabel htmlFor='loginPassword' >Password</InputLabel>
                                <Input id='loginPassword' type='password'  loginpassword={this.state.loginPassword}  onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className='red'>required</span>
                                 </FormHelperText>
                            </FormControl><br /><br />
                            <Button variant='contained' color='primary' onClick ={this.loginClickHandler}>Login</Button>
                        </TabContainer>}


                        {this.state.value === 1 &&
                        <TabContainer >
                            <FormControl required>
                                <InputLabel htmlFor='firstname' >First Name</InputLabel><br />
                                <Input id='firstname' type='text' firstname={this.state.firstName}  onChange={this.inputFirstnameChangeHandler} />
                                <FormHelperText className={this.state.firstnameRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor='lastname' >Last Name</InputLabel>
                                <Input id='lastname' type='text'  lastname={this.state.lastName}  onChange={this.inputLastnameChangeHandler} />
                                <FormHelperText className={this.state.lastnameRequired}>
                                    <span className='red'>required</span>
                                 </FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor='email' >Email</InputLabel>
                                <Input id='email' type='text'  email={this.state.email}  onChange={this.inputemailChangeHandler} />
                                <FormHelperText className={this.state.emailRequired}>
                                    <span className='red'>required</span>
                                 </FormHelperText>
                            </FormControl><br /><br />

                            <FormControl required>
                                <InputLabel htmlFor='registerpassword' >Password</InputLabel>
                                <Input id='registerpassword' type='password'  registerpassword={this.state.registerPassword}  onChange={this.inputRegisterPasswordChangeHandler} />
                                <FormHelperText className={this.state.registerPasswordRequired}>
                                    <span className='red'>required</span>
                                 </FormHelperText>
                            </FormControl><br /><br />
                           
                            <FormControl required>
                                <InputLabel htmlFor='contactno' >Contact No</InputLabel>
                                <Input id='contactno' type='text'  contactno={this.state.contactNo}  onChange={this.inputcontactnoChangeHandler} />
                                <FormHelperText className={this.state.contactnoRequired}>
                                    <span className='red'>required</span>
                                 </FormHelperText>
                            </FormControl><br /><br />

                            <Button variant='contained' color='primary' onClick ={this.registerClickHandler}>REGISTER</Button>
                        </TabContainer>}
                </Model>
            </div>
        )
    }
}

export default Header;
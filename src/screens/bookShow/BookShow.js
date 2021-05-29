import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "../../common/header/Header";
import { Typography } from "@material-ui/core";
import './BookShow.css';
import Home from "../../screens/home/Home";
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Details from "../details/Details";
import Card from '@material-ui/core/Card';
import { CardContent, TextField } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Confirmation from '../../screens/confirmation/Confirmation';

class BookShow extends Component {
    constructor() {
        super();
        this.state = {
            location: "",
            locationRequired :'dispNone',
            language: "",
            languageRequired :'dispNone',
            showDate: "",
            showdateRequired :'dispNone',
            showTime: "",
            showtimeRequired :'dispNone',
            unitPrice: 500,
            available: 20,
            tickets: 0

        }
    }
    backToHomeHandler = () => {
        ReactDOM.render(
            <Home />,
            // <Details movieId = {this.props.movieId} />,
            document.getElementById('root')
        )
    }

    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }
    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }
    showTimeChangeHandler = event => {
        this.setState({ showTime: event.target.value });
    }

    ticketsChangeHandler = event => {
        this.setState({ tickets: event.target.value })
    }

    bookShowButtonHandler = () =>{
        this.state.location === "" ? this.setState({locationRequired :"dispBlock"}) : this.setState({locationRequired :"dispNone"});
        this.state.language === "" ? this.setState({languageRequired :"dispBlock"}) : this.setState({languageRequired :"dispNone"});
        this.state.showDate === "" ? this.setState({showdateRequired :"dispBlock"}) : this.setState({showdateRequired :"dispNone"});
        this.state.showTime === "" ? this.setState({showtimeRequired :"dispBlock"}) : this.setState({showtimeRequired :"dispNone"});
        ReactDOM.render(
            <Confirmation  bookingInfo ={this.state}/>,
            // <Details movieId = {this.props.movieId} />,
            document.getElementById('root')
        )
    }
    render() {
        return (
            <div>
                <Header />
                <div className='back'>
                    <Typography onClick={this.backToHomeHandler}>
                        &#60; back To Home
                    </Typography>
                    <Card className='cardStyle'>
                        <CardContent>
                            <Typography component='h2' variant='headline'>
                                Book Show
                             </Typography>
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >            {location.map(loc => (
                                    <MenuItem key={"loc" + loc.id} value={loc.location}>
                                        {loc.location}
                                    </MenuItem>
                                ))}
                                </Select>
                                <FormHelperText className={this.state.locationRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >            {language.map(language => (
                                    <MenuItem key={"lang" + language.id} value={language.language}>
                                        {language.language}
                                    </MenuItem>
                                ))}
                                </Select>
                                <FormHelperText className={this.state.languageRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showDate">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >            {showDate.map(sd => (
                                    <MenuItem key={"sd" + sd.id} value={sd.showDate}>
                                        {sd.showDate}
                                    </MenuItem>
                                ))}
                                </Select>
                                <FormHelperText className={this.state.showdateRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="showTime">Choose Show Time:</InputLabel>
                                <Select
                                    value={this.state.showTime}
                                    onChange={this.showTimeChangeHandler}
                                >            {showTime.map(st => (
                                    <MenuItem key={"st" + st.id} value={st.showTime}>
                                        {st.showTime}
                                    </MenuItem>
                                ))}
                                </Select>
                                <FormHelperText className={this.state.showtimeRequired}>
                                    <span className='red'>required</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="tickets">tickets :({this.state.available})available</InputLabel>
                                <Input id='tickets' onChange={this.ticketsChangeHandler} value={this.state.tickets !== 0 ? this.state.tickets : ""} />
                            </FormControl> <br /><br />
                            <Typography>
                                Unit Price: Rs. {this.state.unitPrice}
                            </Typography>
                            <br />
                            <Typography>
                                Total Price: Rs. {this.state.unitPrice * this.state.tickets}
                            </Typography>
                            <br /><br />
                            <Button variant="contained" onClick={this.bookShowButtonHandler} color="primary">
                                BOOK SHOW
                            </Button>
                        </CardContent>
                    </Card>

                </div>
            </div>
        );
    }
}
export default BookShow
import { render } from "@testing-library/react";
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import './Confirmation.css';
import BookShow from '../../screens/bookShow/BookShow';
import Header from "../../common/header/Header";
import { Card, CardContent, FormControl, Typography } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

class Confirmation extends Component {
    constructor() {
        super()
    }

    backToBookShowHandler = () => {
        ReactDOM.render(
            <BookShow />,
            // <Details movieId = {this.props.movieId} />,
            document.getElementById('root')
        )
    }

    confirmBookingHandler =() =>{
        ReactDOM.render(<Alert severity="success">Booking Confirmed!</Alert>, document.getElementById('root')
        )
    }
    render() {
        return (
            <div>
                <Header />
                <div className='back'>
                    <Typography onClick={this.backToBookShowHandler}>
                        &#60; back To Book Show
                    </Typography>
                    <Card className='cardStyle'>
                        <CardContent>
                            <Typography component='h2' variant='headline'>
                                Summary
                             </Typography> <br />
                            <div className='coupon-container' >
                                <div className='cardContaint'><Typography > Location : </Typography></div>
                                <div><Typography>{this.props.bookingInfo.location}</Typography></div>
                            </div><br />
                            <div className='coupon-container' >
                                <div className='cardContaint'><Typography  > Language : </Typography></div>
                                <div><Typography>{this.props.bookingInfo.language}</Typography></div>
                            </div>
                            <br />
                            <div className='coupon-container' >
                                <div className='cardContaint'><Typography  > Show Date : </Typography></div>
                                <div><Typography>{this.props.bookingInfo.showDate}</Typography></div>
                            </div>
                            <br />
                            <div className='coupon-container' >
                                <div className='cardContaint'><Typography  > Show Time : </Typography></div>
                                <div><Typography>{this.props.bookingInfo.showTime}</Typography></div>
                            </div>
                            <br />
                            <div className='coupon-container' >
                                <div className='cardContaint'><Typography  > Tickets : </Typography></div>
                                <div><Typography>{this.props.bookingInfo.tickets}</Typography></div>
                            </div>
                            <br />
                            <div className='coupon-container' >
                                <div className='cardContaint'><Typography  > Unit Price : </Typography></div>
                                <div><Typography>{this.props.bookingInfo.unitPrice}</Typography></div>
                            </div>
                            <div className='coupon-container'>
                                <div>
                                    <FormControl className="formControl">
                                        <InputLabel htmlFor="coupons">Coupon Code</InputLabel>
                                        <Input id='coupons' />
                                    </FormControl>
                                </div>
                                <div className='marginApply'>
                                    <Button variant="contained" color="primary" >
                                        Apply
                                    </Button>
                                </div>
                            </div><br /><br />

                            <div className="coupon-container">
                                <div className="cardContaint">
                                    <span className="bold">Total Price:</span>
                                </div>
                                <div>{parseInt(this.props.bookingInfo.unitPrice*this.props.bookingInfo.tickets, 10)}</div>
                            </div><br />
                            <Button variant="contained" color="primary" onClick ={this.confirmBookingHandler}>
                                        CONFIRM BOOKING
                                    </Button>

                        </CardContent>

                    </Card>
                </div>
            </div >
        )
    }
}
export default Confirmation;
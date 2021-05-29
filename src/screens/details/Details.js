import { Typography } from "@material-ui/core";
import React, { Component } from "react"
import Header from "../../common/header/Header"
import movieData from "../../common/movieData";
import './Details.css';
import Home from "../../screens/home/Home";
import BookShow from "../../screens/bookShow/BookShow"
import ReactDOM from 'react-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {},
            starIcons: [
                {
                    id: 1,
                    stateId: "star1",
                    color: "black"
                },
                {
                    id: 2,
                    stateId: "star2",
                    color: "black"
                },
                {
                    id: 3,
                    stateId: "star3",
                    color: "black"
                },
                {
                    id: 4,
                    stateId: "star4",
                    color: "black"
                },
                {
                    id: 5,
                    stateId: "star5",
                    color: "black"
                }
            ]
        }
    }
    componentWillMount() {
        let currentState = this.state;
        currentState.movie = movieData.filter((mov) => {
            return mov.id === this.props.movieId
        })[0];
        this.setState({ currentState });
        console.log(this.state);
    }
    backToHomeHandler = () => {
        ReactDOM.render(
            <Home />,
            document.getElementById('root')
        )
    }

    artistClickHandler = (url) => {
        window.location = url;
    }

    starClickHandler = (id) => {
        let starIconList = [];
        for (let star of this.state.starIcons) {
            let starNode = star;
            if (star.id <= id) {
                starNode.color = "yellow"
            }
            else {
                starNode.color = "black";

            }
            starIconList.push(starNode);
        }
        this.setState({ starIcons: starIconList });
    }
    render() {
        let movie = this.state.movie;
        const opts = {
            height: '300',
            width: '700',
            playerVars: {
                autoplay: 1
            }
        }
        return (
            <div className="details">
                <Header showBookShowButton="true" />
                <div className='back'>
                    <Typography onClick={this.backToHomeHandler}>
                        &#60; back To Home
                    </Typography>

                </div>
                <div className="flex-containerDetails">
                    <div className="leftDetails">
                        <img scr={movie.poster_url} alt={movie.title} />
                    </div>
                    <div className="middleDetails">
                        <div>
                            <Typography variant='headline' component='h2'>{movie.title} </Typography>
                        </div>
                        <div>
                            <Typography><span className='bold'>Genre: </span>{movie.genres.join(', ')} </Typography>
                        </div>
                        <div>
                            <Typography><span className='bold'>Duration: </span>{movie.duration} </Typography>
                        </div>
                        <div>
                            <Typography><span className='bold'>Release Date: </span>{new Date(movie.release_date).toDateString()} </Typography>
                        </div>
                        <div>
                            <Typography><span className='bold'>Rating: </span>{movie.rating} </Typography>
                        </div>
                        <div>
                            <Typography><span className='bold'>Plot: </span><a href={movie.wiki_url}>(Wiki Link)</a>{movie.storyline} </Typography>
                        </div>

                    </div>
                    <div className="rightDetails">
                        <Typography>
                            <span className="bold">Rate this movie: </span>
                        </Typography>
                        {this.state.starIcons.map(star => (
                            <StarBorderIcon
                                className={star.color}
                                key={"star" + star.id}
                                onClick={() => this.starClickHandler(star.id)}
                            />
                        ))}
                        <div className="paddingRight">
                            <GridList cellHeight={160} cols={2}>
                                {movie.artists != null && movie.artists.map(artist => (
                                    <GridListTile
                                        className="gridTile"
                                        onClick={() => this.artistClickHandler(artist.wiki_url)}
                                        key={artist.id}>
                                        <img src={artist.profile_url} alt={artist.first_name + " " + artist.last_name} />
                                        <GridListTileBar
                                            title={artist.first_name + " " + artist.last_name}
                                        />
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>

                    </div>
                </div>
            </div>);
    }
}

export default Details
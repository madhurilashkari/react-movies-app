import React, { Component } from "react"
import ReactDOM from 'react-dom';
import "./Home.css";
import Details from "../../screens/details/Details"
import Header from "../../common/header/Header"
import { withStyles } from '@material-ui/core/styles';
import moviesData from "../../common/movieData";
import genres from "../../common/genres";
import artists from "../../common/artists";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import { CardContent, TextField } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});


class Home extends Component {
    constructor() {
        super();
        this.state = {
            movieName: '',
            genres: [],
            artists: []
        }
    }
    inputmovieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
    }

    genreSelectHandler = event => {
        this.setState({ genres: event.target.value });
    }

    artistsSelectHandler = event => {
        this.setState({ artists: event.target.value });
    }

    movieClickHandler =(movieId) =>{
        ReactDOM.render(<Details  movieId= {movieId}/> , document.getElementById('root'));
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span >Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img className="movie-poster" src={movie.poster_url} alt={movie.title} />
                            <GridListTileBar title={movie.title}></GridListTileBar>

                        </GridListTile>
                    ))}
                </GridList>

                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {moviesData.map(movie => (
                                <GridListTile  onClick ={() => this.movieClickHandler(movie.id)} className="released-movie-grid-item" key={"grid" + movie.id}>
                                    <img src={movie.poster_url} className="movie-poster" alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card >
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color='textSecondary'>
                                        FIND MOVIES BY :
                                        </Typography>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor='movieName' >Movie Name</InputLabel><br />
                                    <Input id='movieName' type='text' moviename={this.state.movieName} onChange={this.inputmovieNameChangeHandler} />
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genres</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1} />
                                                <ListItemText primary={genre.name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select
                                        multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistsSelectHandler}
                                    >
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1} />
                                                <ListItemText primary={artist.first_name + " " + artist.last_name} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <TextField type="date" label="Release Date Start" id="releasedatestart" defaultValue="" InputLabelProps={{ shrink: true }} />
                                </FormControl><br />

                                <FormControl>
                                    <TextField type="date" label="Release Date End" id="releasedateend" defaultValue="" InputLabelProps={{ shrink: true }} />
                                </FormControl><br /><br />
                                <FormControl>
                                    <Button variant='contained' color='primary' size='large'>Apply</Button>
                                </FormControl>
                            </CardContent>

                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(Home);
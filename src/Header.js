import React from 'react';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Button from '@material-ui/core/Button';
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  
function Header () {

    const classes = useStyles();
    

    return (
        <header>
        <div className="header navbar-expand-md">
            <div className="header__logo">
                <img className="header__logo__img" src="/blitz-logo.png" alt="Logo is not loaded"/>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <MenuIcon className="navbar-toggler-icon"/>
            </button>
            {/* <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper> */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="header__navbar navbar-nav mr-auto">
            <li className="header__navbar__item nav-item">
                <Button 
                    className="headeer__home__button"
                    color="default"
                    startIcon={<HomeIcon className="header__home__icon"/>}>
                        <span className="header__home__text"> <Link to="/"> Home </Link> </span>
                </Button>
            </li>
            <li className="header__navbar__item nav-item">
                <Button 
                    className="headeer__youtube__button"
                    color="default"
                    startIcon={<YouTubeIcon className="header__youtube__icon"/>}>
                        <span className="header__youtube__text"> Youtube </span>
                </Button>
            </li>
            <li className="header__navbar__item MuiButton-root MuiButtonBase-root dropdown nav-item">
                <Button 
                    className="headeer__home__button"
                    color="default"
                    startIcon={<MapIcon className="header__home__icon"/>}>
                        <span className="header__home__text">
                        <a className="header__navbar__link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        WOT Blitz Maps
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link className="dropdown-item" to="/Hellas">Hellas</Link>
                        </div>
                        </span>
                </Button>

            </li>
            <li className="header__navbar__item nav-item">
                <Button 
                    className="headeer__home__button"
                    color="default"
                    startIcon={<InfoIcon className="header__home__icon"/>}>
                        <span className="header__home__text"><Link to="/about"> About </Link></span>
                </Button>
            </li>
            </ul>
            </div>
        </div>
        </header>
        // <ul>
        //     <li>
        //         <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //         <Link to="/about">About</Link>
        //     </li>
        // </ul>
    );
}
export default Header;

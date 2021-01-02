import React, { useState } from 'react';
import { 
  Box,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Auth0Lock from 'auth0-lock';

const styles = makeStyles((theme) => ({
  root: {

  },
  menuButton: {
    marginRight: 16
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = ({ handleLogin, logUserOut, loggedIn, picture }) => {
  let history = useHistory();
  const classes = styles();
  const handleRedirectToProfile = () => {
    history.push('/profile');
  }
  const handleHomePage = () => {
    history.push('/');
  }

    return(
        <Box>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                <a onClick={handleHomePage}>App</a>
              </Typography>
              {
                loggedIn ?
                <>
                  <Button color="inherit" onClick={handleRedirectToProfile}>
                    <Avatar alt="nae" src={picture} />
                  </Button>
                  <Button color="inherit" onClick={logUserOut}>Logout</Button>
                </>
                :
                <>
                  <Button color="inherit" onClick={handleLogin}>Login</Button>
                  {/* <Button color="inherit" onClick={handleRedirectToProfile}>profile</Button> */}
                </>
              }
            </Toolbar>
          </AppBar>
        </Box>
    );
}

export default Header;
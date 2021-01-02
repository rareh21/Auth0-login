import React, {useState} from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';
import { Box } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Auth0Lock from 'auth0-lock';
import { makeStyles } from '@material-ui/core';
import Footer from './components/Footer/Footer';

const styles = makeStyles(() => {

})

const options = {
  allowAutocomplete: true,
  allowShowPassword: true,
  allowedConnections: ['Username-Password-Authentication'],
  autoclose: true,
  auth: {
    redirect: false
},
rememberLastLogin: true,
};
var lock = new Auth0Lock('6IEm6Yqw6txJF3VNW5dgDch4nqEfZJUz', 'dev-upn-8jp3.us.auth0.com', options);
var accessToken = null;

function App() {
  const classes = styles();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [picture, setPicture] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  let history = useHistory();
  
  const handleLogin = () => {
    lock.on("authenticated", function(authResult) {
      lock.getUserInfo(authResult.accessToken, function(error, profileResult) {
        if (error) {
         console.log(error);
          return;
        }
        accessToken = authResult.accessToken;
        setName(profileResult.name);
        setEmail(profileResult.setEmail);
        setPicture(profileResult.picture);
        setLoggedIn(true);
        console.log(`accessToken ${accessToken} and profile ${profileResult.name}`);
      });
    });
    lock.show();
  }
  const logUserOut = () => {
    lock.logout({
      returnTo: 'http://localhost:3000'
    });
  }
  
  return (
    <Box>
      <Router>
        <Header 
        handleLogin={handleLogin}
        logUserOut={logUserOut}
        loggedIn={loggedIn}
        picture={picture}
        />
        <Route path='/profile'>
          <Profile 
            name={name}
            picture={picture}
            loggedIn={loggedIn}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        {/* <Footer /> */}
      </Router>
    </Box>
  );
}

export default App;

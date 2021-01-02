import React from 'react';
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
// import LinkedInIcon from '@material-ui/icons/LinkedInIcon'; 
// import FacebookIcon from '@material-ui/icons/FacebookIcon'; 
// import TwitterIcon from '@material-ui/icons/TwitterIcon';   

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#556b2f',
    display: 'flex',
    minHeight: 300,
    flexDirection: 'column',
    position: 'sticky',
  }
}))
const Footer = () => {
  const classes = styles();
    return(
      <Box className={classes.root}>
        <Grid container>
          <Grid item md={4}>
            <List>
              <ListItem>
                <ListItemIcon>
                  {/* <FacebookIcon /> */}
                </ListItemIcon>
                <ListItemText  />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>
    );
}

export default Footer;
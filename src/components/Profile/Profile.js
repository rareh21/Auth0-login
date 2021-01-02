import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Avatar
} from '@material-ui/core';
const Profile = ({ name, picture, loggedIn }) => {
  const [userMetadata, setUserMetadata] = useState(null);


  useEffect(() => {
    console.log(`name: ${name} and picture ${picture}`);
  }, []);
    return(
        <Box py={20} px={20}>
          {/* <Avatar alt="profile picture" src={user.picture} /> */}
          {
            !loggedIn ?
            <Typography variant='h3' align='center'>Please Login first</Typography>
            :
            <>
            <Typography variant='h3' align='center'>Welcome to your profile section</Typography>
              <Box display='flex' justifyContent='center' mt={8}>
                <img 
                src={picture} 
                alt="user image" 
                style={{borderRadius: '50%', width: 200}} 
                />
              </Box>
              <Box mt={5} display='flex' justifyContent='center'>
                  <Typography>{name}</Typography>
              </Box>
            </>

          }
        </Box>
    );
}

export default Profile;
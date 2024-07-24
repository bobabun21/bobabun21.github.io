import './App.css';
import React from 'react';
import { Avatar, Box } from '@mui/material';
import photo from './assets/profile-photo-web-page.JPG';

function App() {
  return (
    <div className='App'>
      <Box
        sx={{
          width: 'auto', // Viewport width
          height: 'auto', // Viewport height
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }}
      >
        <Avatar
          className='profile-picture'
          alt='Kelsey Belanger'
          src={photo}
          sx={{
            width: '100%',
            height: '100%',
            display: 'block',
            margin: 0,
            padding: 0
            // borderRadius: 0 // Remove border radius to avoid rounded corners
            // objectFit: 'cover' // Ensure the image covers the container
          }}
          variant='square'
        />
      </Box>
    </div>
  );
}

export default App;

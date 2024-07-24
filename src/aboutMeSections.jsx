// import { Skeleton } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Box } from '@mui/material';
import React from 'react';

function handleClick() {
  // eslint-disable-next-line no-alert
  window.alert('This button was clicked!');
}

export default function AboutMe() {
  return (
    <Box className='about-me-container'>
      <IconButton
        className='waving-hand-icon'
        onClick={handleClick}
        aria-label='learn more about me'
      >
        <div>
          <WavingHandIcon sx={{ color: '#5f6219' }} />
          <p>Learn more about me</p>
        </div>
      </IconButton>
      <IconButton
        className='linkedIn-icon'
        onClick={handleClick}
        aria-label='learn more about me'
      >
        <div>
          <LinkedInIcon sx={{ color: '#5f6219' }} />
          <p>Connect with me on LinkedIn</p>
        </div>
      </IconButton>
    </Box>

  );
}

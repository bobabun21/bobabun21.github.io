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
        onClick={handleClick}
        aria-label='learn more about me'
      >
        <WavingHandIcon
          className='waving-hand-icon'
        />
        <div>
          <p>Learn more about me</p>
        </div>
      </IconButton>
      <IconButton
        onClick={handleClick}
        aria-label='learn more about me'
      >
        <LinkedInIcon
          className='linkedIn-icon'
        />
        <div>
          <p>Connect with me on LinkedIn</p>
        </div>
      </IconButton>
    </Box>
  );
}

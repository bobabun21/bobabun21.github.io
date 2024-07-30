import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, Box } from '@mui/material';
import React from 'react';
import TimelineDialog from './timelineDialog';
import './App.css';

export default function AboutMe() {
  return (
    <Box className='about-me-container'>
      <h1 className='name-header'>Kelsey Belanger</h1>
      <Box className='icon-container'>
        <TimelineDialog />
        <Button
          href='https://www.linkedin.com/in/kelsey-belanger-b9b9a3140'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Connect with Kelsey on LinkedIn'
          className='button-highlight'
        >
          <LinkedInIcon className='linkedIn-icon' />
          Connect with me on LinkedIn
        </Button>
      </Box>
      <h2 className='role-description'>I{'\''}m a Junior Full-Stack Software Developer with a Bachelor of Science in Biological Sciences. I transitioned to Software Development in 2024 and thrive on the challenges of learning new programming concepts.
      </h2>
    </Box>
  );
}

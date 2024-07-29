import WavingHandIcon from '@mui/icons-material/WavingHand';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Box } from '@mui/material';
import React from 'react';
import TimelineDialog from './timelineDialog';
import './App.css';

export default function AboutMe() {
  return (
    <Box className='about-me-container'>
      <h1 className='name-header'>Kelsey Belanger</h1>
      <Box className='icon-container'>
        <IconButton className='button-highlight' aria-label='Learn more about Kelsey'>
          <TimelineDialog />
          <WavingHandIcon className='waving-hand-icon' />
          <p>Learn more about Kelsey</p>
        </IconButton>
        <IconButton
          href='https://www.linkedin.com/in/kelsey-belanger-b9b9a3140'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Connect with Kelsey on LinkedIn'
          className='button-highlight'
        >
          <LinkedInIcon className='linkedIn-icon' />
          <p>Connect with Kelsey on LinkedIn</p>
        </IconButton>
      </Box>
      <h2 className='role-description'>Kelsey is a Junior Full-Stack Software Developer with a Bachelor of Science in Biological Sciences. She transitioned to Software Development in 2024 and thrives on the challenges of learning new programming concepts.
      </h2>
    </Box>
  );
}

import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AboutMe from './aboutMeSections';

export default function PageLayout({ photo }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}
    >
      <Avatar
        alt='Kelsey Belanger'
        src={photo}
        sx={{
          width: '50%',
          height: '100%',
          margin: 0,
          padding: 0
        }}
        variant='square'
      />
      <AboutMe />
    </Box>
  );
}

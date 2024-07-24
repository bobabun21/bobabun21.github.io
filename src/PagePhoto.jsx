import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export default function ProfilePhoto({ photo }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
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
          width: '50%',
          height: '100%',
          display: 'block',
          margin: 0,
          padding: 0
        }}
        variant='square'
      />
    </Box>
  );
}

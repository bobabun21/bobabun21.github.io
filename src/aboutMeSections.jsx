import { Skeleton } from '@mui/material';
import React from 'react';

export default function AboutMeSkeleton() {
  return (
    <Skeleton
      variant='rounded'
      width={210}
      height={60}
      animation={false}
    />
  );
}

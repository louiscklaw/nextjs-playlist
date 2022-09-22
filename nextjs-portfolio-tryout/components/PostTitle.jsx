import { Typography } from '@mui/material';
import * as React from 'react';

export default function PostTitle({ children }) {
  return (
    <Typography variant="title" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
      {children}
    </Typography>
  );
}

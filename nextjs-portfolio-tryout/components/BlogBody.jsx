import { Typography } from '@mui/material';
import * as React from 'react';

export default function BlogBody({ children }) {
  return (
    <Typography variant="body1" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  );
}

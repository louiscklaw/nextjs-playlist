import { Typography } from '@mui/material';
import * as React from 'react';

export default function BlogH3({ sectionRef, children, ...props }) {
  return (
    <Typography variant="h5" sx={{ opacity: 0.9 }} ref={sectionRef} {...props}>
      {children}
    </Typography>
  );
}

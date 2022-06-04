import { Typography } from '@mui/material'
import * as React from 'react'

export default function PageTitle({ children }) {
  return (
    <Typography variant="h4" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

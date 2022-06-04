import { Typography } from '@mui/material'
import * as React from 'react'

export default function PostGlances({ children }) {
  return (
    <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

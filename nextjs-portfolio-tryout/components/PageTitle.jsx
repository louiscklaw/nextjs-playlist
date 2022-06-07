import { Typography } from '@mui/material'
import * as React from 'react'
import { ViewPortMeasureContext } from '../contexts/ViewPortMeasureContext'

export default function PageTitle({ children }) {
  let { md_up } = React.useContext(ViewPortMeasureContext)

  if (md_up)
    return (
      <Typography variant="h4" component={'h2'} sx={{ opacity: 0.9 }}>
        {children}
      </Typography>
    )

  return (
    <Typography variant="h5" component={'h2'} sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

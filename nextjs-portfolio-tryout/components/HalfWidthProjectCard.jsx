import { Box, Button, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function HalfWidthProjectCard({ img_src, title, subtitle, button_link, category_text, button_text }) {
  const { palette } = useTheme()
  const router = useRouter()

  return (
    <Paper elevation={0} variant="outlined" sx={{ borderRadius: { xs: '1rem', md: '1rem' } }}>
      <Stack direction="column" spacing={2} p={'1rem'} justifyContent="center" alignItems="center">
        <Stack direction="column" spacing={1}>
          <Typography variant="caption" fontWeight="bold" sx={{ color: palette.grey['600'] }}>
            {category_text}
          </Typography>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" sx={{ color: palette.grey['600'] }}>
            {subtitle}
          </Typography>
        </Stack>

        <img src={img_src} style={{ maxWidth: '66%', width: 'auto', height: 'auto' }} />

        <Button onClick={e => router.push(button_link)} variant="outlined" color="primary" endIcon={<FaArrowRight />}>
          {button_text || 'View Process'}
        </Button>
      </Stack>
    </Paper>
  )
}

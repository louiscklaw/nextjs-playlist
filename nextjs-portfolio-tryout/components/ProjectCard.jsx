import { Button, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function ProjectCard({
  img_src,
  title,
  subtitle,
  button_link,
  category_text,
  button_text,
}) {
  const { palette } = useTheme()
  const router = useRouter()

  return (
    <Paper elevation={0} variant="outlined" sx={{ borderRadius: { xs: '1rem', md: '1rem' } }}>
      <Grid container spacing={5} p={5}>
        <Grid item xs={12} sm={4}>
          <Stack direction="column" spacing={3}>
            <Typography variant="body2" fontWeight="bold" sx={{ color: palette.grey['600'] }}>
              {category_text}
            </Typography>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="body1" sx={{ color: palette.grey['600'] }}>
              {subtitle}
            </Typography>
            <Button
              onClick={e => router.push(button_link)}
              variant="outlined"
              color="primary"
              endIcon={<FaArrowRight />}
            >
              {button_text || 'View Process'}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8} container justifyContent="center" alignItems="center">
          <img src={img_src} style={{ maxWidth: '80%', width: 'auto', height: 'auto' }} />
        </Grid>
      </Grid>
    </Paper>
  )
}

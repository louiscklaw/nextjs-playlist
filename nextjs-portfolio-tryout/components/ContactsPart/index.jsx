import { Container, Grid, IconButton, Stack, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function ContactsPart() {
  let { palette } = useTheme()
  return (
    <Stack justifyContent="center" alignItems="center" spacing={2}>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="space-around" alignItems={'flex-start'}>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
                LET'S CHAT
              </Typography>
              <Typography variant="body2" color="primary" sx={{ opacity: 0.9 }}>
                I am excited for new opportunities, let's talk about working together.
              </Typography>
              <Typography variant="body2" color="primary" sx={{ opacity: 0.9 }}>
                logickee@gmail.com
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
                KEEP IN TOUCH
              </Typography>
              <Typography variant="body2" color="primary">
                Follow my social media and see what I'm up to.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary" sx={{ opacity: 0.9 }}>
                  <FaLinkedinIn />
                </IconButton>
                <IconButton color="primary" sx={{ opacity: 0.9 }}>
                  <FaGithub />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
                SUBSCRIBE
              </Typography>
              <Typography variant="body2" color="primary" sx={{ opacity: 0.9 }}>
                I write regularly on the subject of design and technology. Feel free to subscribe
                via RSS or follow me on Medium.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

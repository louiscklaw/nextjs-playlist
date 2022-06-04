import { Stack, Container, Grid, useTheme, Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React, { useContext } from 'react'

import { ViewPortMeasureContext } from '../../contexts/ViewPortMeasureContext'
// import Link from '../../src/Link'
import Link from '../../src/Link'

function DesktopLink({ link_text, link_href }) {
  return (
    <Link href={link_href} underline="hover">
      <Typography variant="h6" sx={{ opacity: 0.9 }}>
        {link_text}
      </Typography>
    </Link>
  )
}

export default function BottomList() {
  const { palette } = useTheme()
  const { md_up } = React.useContext(ViewPortMeasureContext)
  return (
    <>
      <Stack justifyContent="center" alignItems="center" spacing={5}>
        {md_up ? (
          <Stack direction="row" spacing={5}>
            <DesktopLink link_text="About" link_href="/about" />
            <DesktopLink link_text="Work" link_href="/work" />
            <DesktopLink link_text="Blog" link_href="/blog" />
            <DesktopLink link_text="Photo" link_href="/photo" />
            <DesktopLink link_text="Resources" link_href="/resources" />
            <DesktopLink link_text="Changelog" link_href="/changelog" />
          </Stack>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={6} md={2}>
              <Link href="/about" underline="hover">
                About
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link href="/work" underline="hover">
                Work
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link href="/blog" underline="hover">
                Blog
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link href="/photo" underline="hover">
                Photo
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link href="/resources" underline="hover">
                Resources
              </Link>
            </Grid>
            <Grid item xs={6} md={2}>
              <Link href="/changelog" underline="hover">
                Changelog
              </Link>
            </Grid>
          </Grid>
        )}

        <Stack p={1} sx={{ width: '100%' }}>
          <Typography
            variant="caption"
            color={palette.primary.main}
            align="center"
            sx={{ opacity: 0.9 }}
          >
            CODE BY LOUIS LAW © 2018 - 2022
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

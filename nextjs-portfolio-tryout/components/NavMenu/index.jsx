import { Container, IconButton, Stack, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { ViewPortMeasureContext } from '../../contexts/ViewPortMeasureContext'
import Link from '../../src/Link'

export default function NavMenu({ setMobileMenuOpen }) {
  const { palette } = useTheme()
  const theme = useTheme()
  const { md_up } = React.useContext(ViewPortMeasureContext)
  return (
    <>
      <Stack
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        direction="row"
        px={{ xs: 3, md: 5 }}
        py={{ xs: 1, md: 2 }}
        sx={{
          position: { xs: 'fixed', md: 'static' },
          width: { xs: '100%', md: '100%' },
          top: { xs: 0, md: 'auto' },
          background: 'rgba( 255, 255, 255, 0.25 )',
          backdropFilter: md_up ? 'none' : 'blur( 8px )',

          borderBottom: { xs: `1px solid ${palette.grey['300']}`, md: 'none' },
          zIndex: theme.zIndex.drawer,
        }}
      >
        <Link href="#" underline="hover">
          <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: 'bold', opacity: 0.9 }}>
            Louis Law
          </Typography>
        </Link>

        {/* desktop menu */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Stack spacing={5} direction="row">
            <Link href="/about" underline="hover">
              <Typography variant="h6" color={palette.grey['700']}>
                About
              </Typography>
            </Link>
            <Link href="/work" underline="hover">
              <Typography variant="h6" color={palette.grey['700']}>
                Work
              </Typography>
            </Link>
            <Link href="/blog" underline="hover">
              <Typography variant="h6" color={palette.grey['700']}>
                Blog
              </Typography>
            </Link>
            <Link href="/photo" underline="hover">
              <Typography variant="h6" color={palette.grey['700']}>
                Photo
              </Typography>
            </Link>
          </Stack>
        </Box>

        {/* mobile menu */}
        <IconButton disableRipple onClick={e => setMobileMenuOpen(true)} sx={{ display: { xs: 'block', md: 'none' } }}>
          <FiMenu />
        </IconButton>
      </Stack>
    </>
  )
}

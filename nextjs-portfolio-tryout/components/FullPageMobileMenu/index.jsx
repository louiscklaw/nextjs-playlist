import { Drawer, IconButton, Stack, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Div100vh from 'react-div-100vh'
import { GrClose } from 'react-icons/gr'
import Link from '../../src/Link'

export default function FullPageMobileMenu({ mobile_menu_open, setMobileMenuOpen }) {
  const { palette } = useTheme()
  const theme = useTheme()

  return (
    <Drawer anchor={'top'} open={mobile_menu_open} elevation={1} sx={{ opacity: 0.95 }}>
      <Div100vh>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={10} sx={{ height: '100%' }}>
          <Link href="/about" underline="hover">
            <Typography variant="h4" color={palette.grey['700']}>
              About
            </Typography>
          </Link>
          <Link href="/work" underline="hover">
            <Typography variant="h4" color={palette.grey['700']}>
              Work
            </Typography>
          </Link>
          <Link href="/blog" underline="hover">
            <Typography variant="h4" color={palette.grey['700']}>
              Blog
            </Typography>
          </Link>
          <Link href="/photo" underline="hover">
            <Typography variant="h4" color={palette.grey['700']}>
              Photo
            </Typography>
          </Link>

          <IconButton onClick={e => setMobileMenuOpen(false)}>
            <GrClose />
          </IconButton>
        </Stack>
      </Div100vh>
    </Drawer>
  )
}

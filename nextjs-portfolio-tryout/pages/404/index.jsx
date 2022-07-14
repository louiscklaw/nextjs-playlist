import { Box, Paper, Stack, Typography } from '@mui/material'
import { use100vh } from 'react-div-100vh'
import NotFoundSvg from './undraw_a_day_off_re_hedl.svg'
import Link from '../../src/Link'
import { useTheme } from '@emotion/react'

export default function NotFound() {
  let height_100vh = use100vh()
  let theme = useTheme()

  return (
    <>
      <Paper elevation={0} sx={{ backgroundColor: theme.palette.background.paper.main }}>
        <Stack direction="column" spacing={10} justifyContent="center" alignItems="center" sx={{ height: height_100vh }}>
          <Box>
            <img src={NotFoundSvg.src} style={{ width: '100%', maxWidth: 'auto' }} />
          </Box>
          <Box>
            <Typography variant="h5">Sorry but the page not found...</Typography>
            <Typography variant="h5">唔好意思，想要果頁搵唔到...</Typography>
          </Box>
          <Box>
            <Link href="/">
              <Typography variant="h5">back</Typography>
            </Link>
          </Box>
        </Stack>
      </Paper>
    </>
  )
}

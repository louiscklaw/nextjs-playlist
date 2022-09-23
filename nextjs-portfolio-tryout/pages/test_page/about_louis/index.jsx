import { use100vh } from 'react-div-100vh';
import { Typography, Grid, Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

function BackButton() {
  return (
    <Link href="/test_page/page1" passHref>
      <Button variant="contained" style={{ width: '100px', height: '100px' }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <FaArrowLeft />
          <Typography variant="body1">Back</Typography>
        </Stack>
      </Button>
    </Link>
  );
}

export default function About() {
  let height_100vh = use100vh();

  return (
    <>
      <Grid container direction="horizontal" sx={{ height: height_100vh }}>
        <Grid
          item
          xs={3}
          container
          flexDirection="vertical"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Box>name card ?</Box>
            <BackButton />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{ backgroundColor: '#ECECEC', padding: '50px' }}
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={6}>
            <Box>
              <Stack spacing={5}>
                <Typography variant="h3">About me</Typography>
                <Stack spacing={2}>
                  <Typography variant="h5">PURPOSE:</Typography>
                  <Typography variant="body1">
                    A simple page to monitor stock, while data provided by
                    trading view
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Stack spacing={5}>
                <Typography variant="h5">Work history</Typography>
                <Stack spacing={2}>
                  <Typography variant="body1">PURPOSE:</Typography>
                  <Typography variant="body2">
                    A simple page to monitor stock, while data provided by
                    trading view
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

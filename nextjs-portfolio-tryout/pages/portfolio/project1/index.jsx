import { Typography, Grid, Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import NameCard from '../NameCard';
import { use100vh } from 'react-div-100vh';
import { FaArrowLeft } from 'react-icons/fa';
import project_img from './project_img.avif';

export default function Project1() {
  let height_100vh = use100vh();

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        style={{ width: '100vw', height: height_100vh }}
      >
        <Grid
          item
          xs={3}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item>louislaw namecard</Grid>
          <Grid item>
            <Link href="/test_page/page1" passHref>
              <Button
                variant="contained"
                style={{ width: '100px', height: '100px' }}
              >
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
          </Grid>
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <Box style={{ padding: '10px' }}>
            <img
              src={project_img.src}
              width="100%"
              height="auto"
              style={{ borderRadius: '20px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={5} container justifyContent="center" alignItems="center">
          <Box
            style={{
              padding: '10px',
              height: '80%',
            }}
          >
            <Stack
              spacing={5}
              style={{
                padding: '30px',
                backgroundColor: '#F8F8F8',
                height: '100%',
                borderRadius: '20px',
              }}
            >
              <Box>
                <Typography variant={'h3'}>Tradingview dashboard</Typography>
              </Box>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography variant={'h5'}>Purpose:</Typography>
                  <Typography variant={'body1'}>
                    A simple page to monitor stock, while data provided by
                    trading view
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant={'h5'}>Purpose:</Typography>
                  <Typography variant={'body1'}>
                    A simple page to monitor stock, while data provided by
                    trading view
                  </Typography>
                </Stack>
                <Stack spacing={1}>
                  <Typography variant={'h5'}>Purpose:</Typography>
                  <Typography variant={'body1'}>
                    A simple page to monitor stock, while data provided by
                    trading view
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

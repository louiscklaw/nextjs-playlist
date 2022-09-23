import { Typography, Grid, Box } from '@mui/material';
import Link from 'next/link';
import NameCard from '../NameCard';
import { use100vh } from 'react-div-100vh';

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
        <Grid item xs={3} container direction="column">
          <Box>
            <NameCard />
          </Box>
          <Link href="/test_page/page1">back</Link>
        </Grid>
        <Grid item xs={4} container>
          <Typography>Project1</Typography>
          photo
        </Grid>
        <Grid item xs={5} container>
          description
        </Grid>
      </Grid>
    </>
  );
}

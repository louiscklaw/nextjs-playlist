import { use100vh } from 'react-div-100vh';
import { Typography, Grid, Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import BottomLink from '../BottomLink';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

function BackButton() {
  return (
    <Link href="/portfolio/home" passHref>
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
      <Stack flexDirection={'column'}>
        <Box style={{ height: height_100vh }}>
          <Grid container direction="row" sx={{ height: '100%' }}>
            <Grid
              item
              xs={3}
              container
              flexDirection="column"
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
            >
              <Stack direction="column" style={{ width: '100%' }} spacing={5}>
                <Typography variant="h3">
                  This page cannot complete without these help
                </Typography>
                <List>
                  <ListItem>
                    <Typography variant="body1">
                      Electronic stuff software (arduino, raspberry pi)
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography variant="body1">hardware</Typography>
                  </ListItem>

                  <ListItem>
                    <Typography variant="body1">
                      Do some PCB layout Some making/modeling
                    </Typography>
                  </ListItem>

                  <ListItem>
                    <Typography variant="body1">
                      Web page scraping github searching
                    </Typography>
                  </ListItem>
                </List>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <BottomLink />
      </Stack>
    </>
  );
}

import { Box, Grid, Stack, Typography } from '@mui/material';
import {
  FaBeer,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaSlack,
  FaFigma,
  FaWhatsapp,
} from 'react-icons/fa';

import avatar_jpeg from './1376093.jpeg';

export default function NameCard() {
  return (
    <>
      <Stack
        style={{ height: '100%' }}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          style={{
            width: '75%',
            height: '75%',
            borderRadius: '20px',
            borderWidth: '1px',
            borderColor: 'black',
            backgroundColor: 'rgba( 255, 255, 255, 0.25 )',
            boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.15 )',
            backdropFilter: 'blur( 4px )',
            borderRadius: '10px',
            border: '1px solid rgba( 255, 255, 255, 0.18 )',
          }}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: '100%' }}
          >
            <Grid item xs={6} container justifyContent="center">
              <Box>
                <img
                  src={avatar_jpeg.src}
                  width={'100px'}
                  height={'auto'}
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <Typography variant={'h5'}>Louis Law</Typography>
                <Typography variant={'body1'} color={'#7F8C8D'}>
                  @louiscklaw
                </Typography>
                <Typography variant={'body1'} color={'#7F8C8D'}>
                  validation engineer
                </Typography>
                <Typography variant={'body1'} color={'#7F8C8D'}>
                  developer
                </Typography>
                <FaBeer />
                <FaWhatsapp />
                <FaPhoneAlt />
                <FaGithub />
                <FaLinkedinIn />
                <FaSlack />
                <FaFigma />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
}

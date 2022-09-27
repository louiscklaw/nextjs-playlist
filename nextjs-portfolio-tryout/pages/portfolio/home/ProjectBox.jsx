import { Box, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import test_project_background_avif from './test_project_background.avif';

export default function ProjectBox({ href, image_src, text = '' }) {
  if (image_src == '')
    return (
      <>
        <Box style={{ padding: '1px', height: '100%', opacity: '40%' }}>
          <Box
            style={{
              backgroundColor: '#2C3E50',
              color: 'white',
              height: '100%',

              borderRadius: '10px',
            }}
          >
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Typography variant="body1">
                An amazing project born here
              </Typography>
            </Stack>
          </Box>
        </Box>
      </>
    );

  return (
    <>
      <Link href={href} passHref>
        <Box style={{ padding: '1px', height: '100%', cursor: 'pointer' }}>
          <Box style={{ height: '100%' }}>
            <Box
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${image_src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
              }}
            >
              {text ? (
                <Stack
                  style={{ height: '100%', width: '100%' }}
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Stack
                    style={{
                      padding: '10px',
                      width: '100%',

                      background: 'rgba( 255, 255, 255, 0.25 )',
                      boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                      backdropFilter: 'blur( 4px )',
                      border: '1px solid rgba( 255, 255, 255, 0.18 )',

                      borderRadius: '0px 0px 10px 10px',
                    }}
                    flexDirection="column"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Typography variant={'body1'} color="#ffffff">
                      {text}
                    </Typography>
                  </Stack>
                </Stack>
              ) : (
                <></>
              )}
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}

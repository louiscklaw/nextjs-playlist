import { Box, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import test_project_background_avif from './test_project_background.avif';

export default function ProjectBox() {
  return (
    <>
      <Link href="/test_page/project1" passHref>
        <Box style={{ padding: '1px', height: '100%', cursor: 'pointer' }}>
          <Box style={{ height: '100%' }}>
            <Box
              style={{
                height: '100%',
                width: '100%',
                backgroundImage: `url(${test_project_background_avif.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
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
                  }}
                  flexDirection="column"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography variant={'body1'} color="#ffffff">
                    ProjectBox
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}

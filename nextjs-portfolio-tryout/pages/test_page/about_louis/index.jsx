import { use100vh } from 'react-div-100vh';
import { Typography, Grid, Box, Button, Stack } from '@mui/material';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import BottomLink from '../BottomLink';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

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
            <Box>
              <Typography variant="h5">En / 中</Typography>
            </Box>
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
                <Typography variant="h5">Something about me</Typography>
                <Stack spacing={2}>
                  <Typography variant="h5">Language:</Typography>
                  <Typography variant="body1">
                    Cantonese, English, Mandarin
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  <Typography variant="h5">THINGS I DO WHEN I FREE:</Typography>
                  <Typography variant="body1">
                    Electronic stuff software (arduino, raspberry pi), hardware,
                    Do some PCB layout Some making/modeling, Web page scraping
                    github searching
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  <Typography variant="h5">OTHER SKILLS:</Typography>
                  <Typography variant="body1">
                    Linux management Web frontend
                    (bulma/materialize.css/next/gatsby) SQL (MySQL/MariaDB),
                    Realtime DB (Firebase) Desktop applications (kivy)
                    Serverless (Firebase Cloud Functions), PaaS (Heroku) Docker
                    with docker-compose, nginx (Load balancing + Failover)
                    OCR/captcha study(tesseract) KVM (Performance optimization,
                    GPU Passthrough by OVMF)
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Stack spacing={2}>
                <Typography variant="h5">Work history</Typography>

                <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      Handy - Hi. inc. Quality Assurance Engineer(Automation)
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      Sierrawireless Validation engineer
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                      china mobile hong kong Engineer(Radio access network)
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>

                <Stack spacing={1}>
                  <Typography variant="h5">EDUCATION BACKGROUND:</Typography>
                  <Typography variant="body1">
                    City University of Hong Kong (Electronic engineering)
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <BottomLink />
    </>
  );
}

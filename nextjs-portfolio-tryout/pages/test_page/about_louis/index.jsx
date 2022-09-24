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

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

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
                  <Box>
                    <List>
                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          Linux management Web frontend
                          (bulma/materialize.css/next/gatsby)
                        </Typography>
                      </ListItem>

                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          SQL (MySQL/MariaDB), Realtime DB (Firebase) Desktop
                        </Typography>
                      </ListItem>

                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          study(tesseract) KVM (Performance optimization GPU
                          Passthrough by OVMF)
                        </Typography>
                      </ListItem>

                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          study(tesseract) KVM (Performance optimization
                        </Typography>
                      </ListItem>

                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          applications (kivy) Serverless (Firebase Cloud
                          Functions)
                        </Typography>
                      </ListItem>

                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          nginx (Load balancing + Failover) OCR/captcha
                        </Typography>
                      </ListItem>

                      <ListItem disablePadding dense>
                        <Typography variant="body1">
                          PaaS (Heroku) Docker with docker-compose
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
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
                  <Typography variant="h5">Education Background:</Typography>

                  <List>
                    <ListItem disablePadding>
                      <ListItemButton
                        component="a"
                        href="https://www.ee.cityu.edu.hk/"
                      >
                        <img src="https://template.cityu.edu.hk/template/logo/ee/ee_logo_eng_cmyk.svg" />
                        <Typography variant="h6">
                          City University of Hong Kong (Electronic engineering)
                        </Typography>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding dense>
                      <ListItemButton
                        component="a"
                        href="https://www.ive.edu.hk/ivesite/html/tc/campus/ty_overview.html"
                      >
                        <Typography variant="h6">
                          Higher Diploma (Electrical Engineering)
                        </Typography>
                      </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding dense>
                      <ListItemButton
                        component="a"
                        href="https://www.ive.edu.hk"
                      >
                        <Typography variant="h6">
                          Diploma (Electronic Engineering)
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  </List>
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

import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { use100vh } from 'react-div-100vh';
import { FaArrowLeft } from 'react-icons/fa';
import BottomLink from '../BottomLink';

import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

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
      <Grid container direction="row" sx={{ height: height_100vh }}>
        <Grid
          item
          xs={3}
          container
          flexDirection="column"
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
          <Box
            style={{
              padding: '1rem',
              height: '100%',
              width: '100%',
            }}
          >
            <Stack direction="column" spacing={5}>
              <Typography variant="h3">Something about me</Typography>
              <Grid container>
                <Grid item xs={6}>
                  <Stack spacing={5}>
                    <Stack spacing={2}>
                      <Typography variant="h5">Language:</Typography>
                      <Box>
                        <List>
                          <ListItem disablePadding dense>
                            <Typography variant="body1">Cantonese</Typography>
                          </ListItem>

                          <ListItem disablePadding dense>
                            <Typography variant="body1">English</Typography>
                          </ListItem>

                          <ListItem disablePadding dense>
                            <Typography variant="body1">Mandarin</Typography>
                          </ListItem>
                        </List>
                      </Box>
                    </Stack>
                    <Stack spacing={2}>
                      <Typography variant="h5">
                        THINGS I DO WHEN I FREE:
                      </Typography>
                      <Box>
                        <List>
                          <ListItem disablePadding dense>
                            <Typography variant="body1">
                              Electronic stuff software (arduino, raspberry pi)
                            </Typography>
                          </ListItem>

                          <ListItem disablePadding dense>
                            <Typography variant="body1">hardware</Typography>
                          </ListItem>

                          <ListItem disablePadding dense>
                            <Typography variant="body1">
                              Do some PCB layout Some making/modeling
                            </Typography>
                          </ListItem>

                          <ListItem disablePadding dense>
                            <Typography variant="body1">
                              Web page scraping github searching
                            </Typography>
                          </ListItem>
                        </List>
                      </Box>
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
                              SQL (MySQL/MariaDB), Realtime DB (Firebase)
                              Desktop
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
                            Handy - Hi. inc. Quality Assurance
                            Engineer(Automation)
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
                            china mobile hong kong Engineer(Radio access
                            network)
                          </TimelineContent>
                        </TimelineItem>
                      </Timeline>

                      <Stack spacing={1}>
                        <Typography variant="h5">
                          Education Background:
                        </Typography>

                        <List>
                          <ListItem disablePadding>
                            <ListItemButton
                              component="a"
                              href="https://www.ee.cityu.edu.hk/"
                            >
                              <img src="https://template.cityu.edu.hk/template/logo/ee/ee_logo_eng_cmyk.svg" />
                              <Typography variant="h6">
                                City University of Hong Kong (Electronic
                                engineering)
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
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <BottomLink />
    </>
  );
}

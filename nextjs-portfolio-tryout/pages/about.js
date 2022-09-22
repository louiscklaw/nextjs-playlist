import {
  useTheme,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Container from '@mui/material/Container';
import * as React from 'react';
import { useState } from 'react';
import {
  FaArrowRight,
  FaFacebookSquare,
  FaGithub,
  FaTwitterSquare,
} from 'react-icons/fa';

import BottomList from '../components/BottomList';
import NavMenu from '../components/NavMenu';
import FullPageMobileMenu from '../components/FullPageMobileMenu';
import ContactsPart from '../components/ContactsPart';
import Link from '../src/Link';

function TableContent({ children }) {
  return <Typography variant="body1">{children}</Typography>;
}

function TableCategoryHead({ children }) {
  return (
    <Typography variant="caption" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  );
}

function YearLabel({ children }) {
  return (
    <Typography variant="caption" sx={{ opacity: 0.6 }}>
      {children}
    </Typography>
  );
}

function CareerEntry({
  job_title,
  company,
  company_about,
  company_logo,
  year,
}) {
  return (
    <>
      <Grid item container flexDirection="column" spacing={1}>
        <Grid
          item
          xs={12}
          container
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={8}>
            <Stack direction="column" spacing={2}>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                {job_title}
              </Typography>
              <Stack direction="column">
                <Typography
                  variant="caption"
                  sx={{ color: '#fff', opacity: 0.7 }}
                >
                  {company}&nbsp;
                  <Link
                    href={company_about}
                    sx={{ color: '#fff', opacity: 0.7 }}
                  >
                    ( About chinamobile )
                  </Link>
                </Typography>

                <Typography variant="caption" sx={{ opacity: 0.6 }}>
                  {year}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <img
              src={company_logo}
              style={{ width: '100px', maxWidth: 'auto', maxHeight: 'auto' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function EducationEntry({ first, second, date }) {
  return (
    <>
      <Stack spacing={2}>
        <Stack spacing={1}>
          <TableContent>{first}</TableContent>
          <TableContent>{second}</TableContent>
        </Stack>
        <YearLabel>{date}</YearLabel>
      </Stack>
    </>
  );
}

function HelloPart() {
  return (
    <>
      <Container maxWidth="md">
        <Stack spacing={8} direction="column">
          <Stack spacing={4} direction="column">
            <Typography variant="h4" sx={{ opacity: 0.9 }}>
              Hello, my name is Louis Law.
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              I got into product design because I'm deeply passionate about
              technology and how it profoundly changes our way of living.
              Working on range of problems, including finance, travel and
              communication, I help solve users' problem and creating delightful
              interfaces & experience for the past 6 years.
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              color="dimmed"
              endIcon={<FaArrowRight />}
            >
              Let's Chat
            </Button>
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth="lg">
        <img
          src="https://desktopofsamuel.com/static/ea59cfb3888098a666295d020dca2dee/9c00f/profile-2014.webp"
          width="100%"
          maxWidth="auto"
          maxHeight="auto"
        />
      </Container>

      <Container maxWidth="lg">
        <Grid container flexDirection="column" rowGap={10}>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
              My Journey
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ opacity: 0.9 }}>
                  INTERNED AT APPLE
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Majoring in Arts in college, I took a gap year working in
                  iTunes & App Store, Apple. This valuable experience cultivated
                  my interest and knowledge in digital products.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ opacity: 0.9 }}>
                  STARTING MY AGENCY
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  With growing freelance web & design projects, I founded a
                  digital agency, Playa, to help small businesses,
                  entrepreneurs, and non-profits launching their projects.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={3}>
                <Typography variant="h5" sx={{ opacity: 0.9 }}>
                  SWITCHING TO PRODUCT
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Currently, I work as a UX/UI consultant in finance sector.
                  Before that, I worked as a Principal Designer at Hyperair, a
                  travel start-up based in Hong Kong.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function CVPart() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.deep_background.main,
          color: theme.palette.deep_background.contrastText,
          width: '100%',
        }}
        pt="8rem"
        pb="8rem"
      >
        <Container maxWidth="xl">
          <Stack justifyContent="center" spacing={5}>
            <Typography
              variant="h3"
              sx={{ color: theme.palette.deep_background.contrastText }}
            >
              Louis Law
            </Typography>
            <Stack direction="column" spacing={2}>
              <Box
                sx={{ borderTop: '1px solid #fff', opacity: 0.2 }}
                p="0.5rem"
              ></Box>

              {/* career */}
              <Grid container>
                <Grid item xs={1} md={2}>
                  <Box
                    sx={{
                      transformOrigin: 'left top',
                      transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                      position: 'relative',
                      top: '0.5rem',
                      left: '1.5rem',
                    }}
                  >
                    <Typography variant="caption" sx={{ opacity: 0.9 }}>
                      Career
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={11} md={10}>
                  <Grid container spacing={5}>
                    <CareerEntry
                      job_title="Validation engineer"
                      company="Sierrawireless"
                      company_about="https://www.sierrawireless.com/company/"
                      year="2015 - 2017"
                      company_logo="https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Sierra_Wireless_logo.svg/125px-Sierra_Wireless_logo.svg.png?20181113160819"
                    />
                    <CareerEntry
                      job_title="Engineer III"
                      company="chinamobile"
                      company_about="https://www.chinamobileltd.com/en/about"
                      year="2015 - 2017"
                      company_logo="https://upload.wikimedia.org/wikipedia/en/thumb/9/90/China_Mobile_logo_%282019%29.svg/512px-China_Mobile_logo_%282019%29.svg.png?20210629201310"
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Education */}
              <Stack justifyContent="center">
                <Box
                  sx={{ borderTop: '1px solid #fff', opacity: 0.2 }}
                  p="0.5rem"
                ></Box>
                <Grid container justifyContent="center" alignItems="flex-start">
                  <Grid item xs={1} md={2}>
                    <Box
                      sx={{
                        transformOrigin: 'left top',
                        transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                        position: 'relative',
                        top: '0.5rem',
                        left: '1.5rem',
                      }}
                    >
                      <Typography variant="caption" sx={{ opacity: 0.9 }}>
                        Education
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={11} md={10} flexDirection="column">
                    <Stack direction="column" spacing={5}>
                      <EducationEntry
                        first="City University of Hong Kong"
                        second="Electronic and Communication Engineering (BEng.)"
                        date="2011 - 2015"
                      />
                      <EducationEntry
                        first="Tsing Yi IVE"
                        second="Electrical Engineering"
                        date="2011 - 2015"
                      />
                      <EducationEntry
                        first="KTTI"
                        second="Electronic and Communication Engineering"
                        date="2011 - 2015"
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>

              {/* Achievements
      <Stack justifyContent="center">
        <Box sx={{ borderTop: '1px solid #fff', opacity: 0.2 }} p="0.5rem"></Box>
        <Grid container>
          <Grid item xs={2}>
            <Box
              sx={{
                transformOrigin: 'left top',
                transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                position: 'relative',
                top: '0.5rem',
                left: '1.5rem',
              }}
            >
              <TableCategoryHead>Achievements</TableCategoryHead>
            </Box>
          </Grid>
          <Grid item xs={10}>
            <Stack direction="column" spacing={1}>
              <Box>
                <TableContent>
                  Triple Gold Award in Web Accessibility Recognition Scheme
                </TableContent>
                <YearLabel>
                  OFFICE OF THE GOVERNMENT CHIEF INFORMATION OFFICER, 2016 & 2018
                </YearLabel>
              </Box>
              <Box>
                <TableContent>Best .HK LegCo Members Website Award (Gold)</TableContent>
                <YearLabel>
                  HONG KONG INTERNET REGISTRATION CORPORATION, 2017 & 2019
                </YearLabel>
              </Box>
              <Box>
                <TableContent>Cyberport Creative Micro Fund 2015</TableContent>
                <YearLabel>CYBERPORT, 2015</YearLabel>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Stack> */}

              {/* Languages */}
              <Stack justifyContent="center">
                <Box
                  sx={{ borderTop: '1px solid #fff', opacity: 0.2 }}
                  p="0.5rem"
                ></Box>
                <Grid container>
                  <Grid item xs={1} md={2}>
                    <Box
                      sx={{
                        transformOrigin: 'left top',
                        transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                        position: 'relative',
                        top: '0.5rem',
                        left: '1.5rem',
                      }}
                    >
                      <TableCategoryHead>Languages</TableCategoryHead>
                    </Box>
                  </Grid>
                  <Grid item xs={11} md={10}>
                    <Stack direction="column" spacing={3}>
                      <Box>
                        <TableContent>Chinese (Cantonese)</TableContent>
                      </Box>
                      <Box>
                        <TableContent>English</TableContent>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

function LetsConnectPart() {
  return (
    <>
      <Container maxWidth="md">
        <Stack
          spacing={8}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Stack spacing={4} direction="column">
            <Typography variant="h4" align="center" sx={{ opacity: 0.9 }}>
              Let's Connect
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Drop me a line if you want to say hi, or share your thoughts on my
              writings.
            </Typography>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            justifyContent="space-between"
          >
            <Button
              variant="outlined"
              color="dimmed"
              endIcon={<FaArrowRight />}
            >
              Start Conversation
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

export default function About() {
  let [mobile_menu_open, setMobileMenuOpen] = useState(false);

  return (
    <Container maxWidth="xl">
      <Paper elevation={0}>
        <FullPageMobileMenu
          mobile_menu_open={mobile_menu_open}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Stack spacing={18} justifyContent="center" alignItems={'center'}>
          <NavMenu setMobileMenuOpen={setMobileMenuOpen} />
          <HelloPart />
          <CVPart />
          <LetsConnectPart />
          <ContactsPart />
          <BottomList />
        </Stack>
      </Paper>
    </Container>
  );
}

import { Button, Container, Drawer, Grid, IconButton, Paper, Stack, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useState } from 'react'
import Div100vh from 'react-div-100vh'
import { FaArrowRight, FaFacebookSquare, FaGithub, FaTwitterSquare } from 'react-icons/fa'
import { GrClose } from 'react-icons/gr'
import { MdAlternateEmail } from 'react-icons/md'

import BottomList from '../components/BottomList'
import NavMenu from '../components/NavMenu'
import FullPageMobileMenu from '../components/FullPageMobileMenu'
import ContactsPart from '../components/ContactsPart'

function NamePart() {
  let { palette } = useTheme()

  return (
    <>
      <Stack justifyContent={'center'} alignItems={'center'} sx={{ height: '100vh', maxHeight: '90vh' }}>
        <Stack direction="column" spacing={5}>
          <Typography variant="body1" component="h1" align="center" color={palette.grey['800']} sx={{ opacity: 0.9 }}>
            WELCOME TO PORTFOLIO OF
          </Typography>
          <Typography variant="h3" component="h2" align="center" sx={{ opacity: 0.9 }}>
            Louis Law
          </Typography>
          <Typography variant="body1" component="h2" align="center" color={palette.grey['800']} sx={{ opacity: 0.9 }}>
            Full-stack UI/UX designer crafting websites &<br /> mobile applications with bespoke experience.
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between">
            <Button variant="outlined" color="dimmed" endIcon={<FaArrowRight />}>
              Read my portfolio
            </Button>
            <Button variant="outlined" color="dimmed" endIcon={<FaArrowRight />}>
              View my CV
            </Button>
          </Stack>

          <Stack direction="row" spacing={5} justifyContent="center">
            <FaFacebookSquare size={'1.5rem'} />
            <FaGithub size={'1.5rem'} />
            <MdAlternateEmail size={'1.5rem'} />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

function ProjectCard() {
  const { palette } = useTheme()
  return (
    <Container maxWidth="md">
      <Paper elevation={0} variant="outlined" sx={{ borderRadius: { xs: '1rem', md: '2rem' } }}>
        <Grid container spacing={5} p={5}>
          <Grid item xs={12} sm={4}>
            <Stack direction="column" spacing={3}>
              <Typography variant="body1" sx={{ color: palette.grey['600'] }}>
                HSBC @ PROTIVITI
              </Typography>
              <Typography variant="h4">Enhancing Stock Trading Experience</Typography>
              <Typography variant="body1" sx={{ color: palette.grey['600'] }}>
                Building professional stock trading and analysis interface on browser
              </Typography>
              <Button variant="outlined" color="dimmed" endIcon={<FaArrowRight />}>
                View Process
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <img
              src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
              style={{ maxWidth: '100%', width: 'auto', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
function FirstPart() {
  const { palette } = useTheme()
  return (
    <Stack justifyContent="center" alignItems="center" spacing={5}>
      <Container maxWidth="md">
        <Stack justifyContent="center" alignItems="center" spacing={5}>
          <Stack justifyContent="center" alignItems="center" spacing={1}>
            <Typography variant="h6" sx={{ color: palette.grey['600'] }}>
              #01
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} align="center">
              Interaction and Experience Design
            </Typography>
            <Typography variant="body1" sx={{ color: palette.grey['600'] }}>
              Extensive experience delivering products in corporations and start-ups
            </Typography>
          </Stack>
          <Button variant="outlined" color="dimmed" endIcon={<FaArrowRight />}>
            View my process
          </Button>
        </Stack>
      </Container>

      <ProjectCard />

      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} variant="outlined" sx={{ borderRadius: { xs: '1rem' } }}>
              <Stack p={3} spacing={2}>
                <Typography variant="body1" color={palette.dimmed.main}>
                  HyperAir
                </Typography>
                <Typography variant="h5">Integrating All-round Travel Platform</Typography>
                <Typography variant="body1" color={palette.dimmed.main}>
                  Walkthrough on taking design ownership and to be startup's first designer
                </Typography>
                <img
                  src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                  style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
                />
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} variant="outlined" sx={{ borderRadius: { xs: '1rem' } }}>
              <Stack p={3} spacing={2}>
                <Typography variant="body1" color={palette.dimmed.main}>
                  WATER FOR FREE
                </Typography>
                <Typography variant="h5">Building Hong Kong's First Water Dispenser Map</Typography>
                <Typography variant="body1" color={palette.dimmed.main}>
                  User-centered revamp to be more helpful and engaged
                </Typography>
                <img
                  src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/49e8c/hsbc-crop-cover.webp"
                  style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
                />
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

function SecondPart() {
  const { palette } = useTheme()

  return (
    <Stack justifyContent="center" alignItems="center" spacing={5}>
      <Container maxWidth="md">
        <Stack justifyContent="center" alignItems="center" spacing={5}>
          <Stack justifyContent="center" alignItems="center" spacing={1}>
            <Typography variant="h6" sx={{ color: palette.grey['600'] }}>
              #02
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }} align="center">
              Notes on Design & Technology
            </Typography>
            <Typography variant="body1" sx={{ color: palette.grey['600'] }}>
              I write about design, technology and productivity.
            </Typography>
          </Stack>

          <Button variant="outlined" color="dimmed" endIcon={<FaArrowRight />}>
            Read my blog
          </Button>
        </Stack>
      </Container>

      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} variant="outlined">
              <Stack spacing={2}>
                <img
                  src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
                  style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
                />

                <Box p={3}>
                  <Typography variant="h5">2021 and more...</Typography>
                  <Typography variant="body1" color={palette.dimmed.main}>
                    My summary and reflection on 2021
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} variant="outlined">
              <Stack spacing={2}>
                <img
                  src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
                  style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
                />

                <Box p={3}>
                  <Typography variant="h5">Navigating Design Career with Design OKRs</Typography>
                  <Typography variant="body1" color={palette.dimmed.main}>
                    Goal setting framework to progress your UX career
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={0} variant="outlined">
              <Stack spacing={2}>
                <img
                  src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
                  style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
                />

                <Box p={3}>
                  <Typography variant="h5">Reflecting on 2020</Typography>
                  <Typography variant="body1" color={palette.dimmed.main}>
                    My summary and reflection on 2020
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={0} variant="outlined">
              <Stack spacing={2}>
                <img
                  src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
                  style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
                />

                <Box p={3}>
                  <Typography variant="h5">Takeaways from building a COVID-19 curatorial side project</Typography>
                  <Typography variant="body1" color={palette.dimmed.main}>
                    I built a free resources curatorial site for COVID-19, and here are my lessons
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  )
}

function ThirdPart() {
  const { palette } = useTheme()

  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        <Container maxWidth="md">
          <Stack justifyContent="center" alignItems="center" spacing={5}>
            <Stack justifyContent="center" alignItems="center" spacing={1}>
              <Typography variant="h6" sx={{ color: palette.grey['600'] }}>
                #03
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }} align="center">
                Tools & Resources
              </Typography>
              <Typography variant="body1" sx={{ color: palette.grey['600'] }}>
                Best resources and tools I have been using. Guide on getting started in design & code.
              </Typography>
            </Stack>
            <Button variant="outlined" color="dimmed" endIcon={<FaArrowRight />}>
              My awesome setup
            </Button>
          </Stack>
        </Container>
      </Stack>

      <Grid container>
        <Grid item xs={3}>
          <img
            src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
            style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
            style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
            style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
          />
        </Grid>
        <Grid item xs={3}>
          <img
            src="https://desktopofsamuel.com/static/2bf718c4961a80ec273700bd6abfd8f5/45939/2021-reflection.webp"
            style={{ width: '100%', maxWidth: 'auto', maxHeight: 'auto' }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default function Index() {
  let { palette } = useTheme()

  let [mobile_menu_open, setMobileMenuOpen] = useState(false)

  return (
    <Container maxWidth="xl">
      <Paper elevation={0}>
        <FullPageMobileMenu mobile_menu_open={mobile_menu_open} setMobileMenuOpen={setMobileMenuOpen} />
        <NavMenu setMobileMenuOpen={setMobileMenuOpen} />
        <Stack rowGap={18} justifyContent="center" alignItems={'center'}>
          <NamePart />
          <FirstPart />
          <SecondPart />
          <ThirdPart />
          <ContactsPart />
          <BottomList />
        </Stack>
      </Paper>
    </Container>
  )
}

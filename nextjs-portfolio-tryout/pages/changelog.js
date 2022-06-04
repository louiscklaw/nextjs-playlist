import { useTheme, Box, Button, Grid, Paper, Stack, Typography, Divider } from '@mui/material'
import Container from '@mui/material/Container'
import * as React from 'react'
import { useState } from 'react'
import { FaEdit, FaArrowRight, FaFacebookSquare, FaGithub, FaTwitterSquare } from 'react-icons/fa'
import { TiSpanner } from 'react-icons/ti'

import BottomList from '../components/BottomList'
import NavMenu from '../components/NavMenu'
import FullPageMobileMenu from '../components/FullPageMobileMenu'
import ContactsPart from '../components/ContactsPart'
import Link from '../src/Link'

import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { ViewPortMeasureContext } from '../contexts/ViewPortMeasureContext'

import FastfoodIcon from '@mui/icons-material/Fastfood'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import HotelIcon from '@mui/icons-material/Hotel'
import RepeatIcon from '@mui/icons-material/Repeat'

let change_log_json = [
  {
    date: 'Jun 2, 2022',
    log: [<>Simple update</>],
  },
  {
    date: 'Jun 1, 2022',
    log: [<>Simple update</>],
  },
  {
    date: 'May 31, 2022',
    log: [
      <>
        louis law shamelessly clone design from{' '}
        <Link href="https://desktopofsamuel.com/">Samuel Wong</Link>
      </>,
    ],
  },
]

function UpdateTimelineItem({ item }) {
  let { date, log } = item
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <TiSpanner />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Update
          </Typography>
          <Typography>{log}</Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  )
}

function PageContent() {
  let { palette } = useTheme()
  const { md_up } = React.useContext(ViewPortMeasureContext)

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Stack rowGap={2}>
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              sx={{ opacity: 0.9 }}
              align={md_up ? 'left' : 'center'}
            >
              Changelog
            </Typography>
            <Typography
              variant="body1"
              component="h3"
              sx={{ opacity: 0.9 }}
              align={md_up ? 'left' : 'center'}
            >
              A jot what happened on this page
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={8}>
          <Timeline>
            {change_log_json.map((item, idx) => (
              <UpdateTimelineItem item={item} />
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Container>
  )
}

export default function About() {
  let [mobile_menu_open, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Container maxWidth="xl">
        <Paper elevation={0}>
          <Stack spacing={18} justifyContent="center" alignItems={'center'}>
            <NavMenu setMobileMenuOpen={setMobileMenuOpen} />
            <FullPageMobileMenu
              mobile_menu_open={mobile_menu_open}
              setMobileMenuOpen={setMobileMenuOpen}
            />

            {/* change log here ? */}
            <PageContent />
            {/* change log here ? */}
            <ContactsPart />
            <BottomList />
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

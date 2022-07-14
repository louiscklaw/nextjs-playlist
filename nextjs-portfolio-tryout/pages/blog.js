import { useTheme, Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import * as React from 'react'
import { useState } from 'react'
import { FaArrowRight, FaFacebookSquare, FaGithub, FaTwitterSquare } from 'react-icons/fa'

import BottomList from '../components/BottomList'
import NavMenu from '../components/NavMenu'
import FullPageMobileMenu from '../components/FullPageMobileMenu'
import ContactsPart from '../components/ContactsPart'
import Link from '../src/Link'

function PostDate({ children }) {
  return (
    <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

function PostTitle({ children }) {
  return (
    <Typography variant="title" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

// featured ?  all post ?
function PostCategoryTitle({ children }) {
  return (
    <Typography variant="h6" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

function PostGlances({ children }) {
  return (
    <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

function FullWidthPostLink({ post_img, date, title, glances, href_to = '#' }) {
  return (
    <>
      <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
        <Grid item xs={4}>
          <img src={post_img} style={{ maxWidth: 'auto', maxHeight: 'auto', width: '100%' }} />
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <PostDate>{date}</PostDate>

            <Link href={href_to} underline="hover">
              <PostTitle>{title}</PostTitle>

              <PostGlances>{glances}</PostGlances>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  )
}

function AllPost() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PostCategoryTitle>All POSTS</PostCategoryTitle>
        </Grid>
        <Grid item xs={12} container rowGap={2}>
          <FullWidthPostLink
            date="CTRL ALT SETUP — JAN 10, 2022"
            post_img="https://desktopofsamuel.com/static/3d725af35fa0d9f78a0f775bb1866d96/9fede/20201217-tableofcontent.webp"
            title="2021 and more..."
            glances="Sorry for the delay, probably this will be the LAST year review you will ever read this year, which arrives right before the first quarter has ended. Reflecting on 2021, there’s steady progress on personal and career development..."
          ></FullWidthPostLink>

          <FullWidthPostLink
            post_img="https://desktopofsamuel.com/static/3d725af35fa0d9f78a0f775bb1866d96/9fede/20201217-tableofcontent.webp"
            title="Navigating Design Career with Design OKRs"
            glances="Goal setting framework to progress your UX career"
          ></FullWidthPostLink>

          <FullWidthPostLink
            post_img="https://newsstatic.rthk.hk/images/mfile_1650632_1_L_20220529001958.jpg"
            title="尼日利亞南部發生人踩人事故至少31人死亡"
            glances="尼日利亞南部發生人群踩踏事故，至少31人死亡。事發在河流州首府哈科特港，警方說，當地一間教堂周六早上在一個體育場組織慈善捐贈活動，吸引大量民眾聚集。當體育場的入口打開時，民眾爭相湧入，導致人踩人。"
          ></FullWidthPostLink>
        </Grid>
      </Grid>
    </>
  )
}

// post unit,
function Post({ post_img, title, glances, href_to = '#' }) {
  return (
    <>
      <Link href={href_to} underline="hover">
        <Stack spacing={2}>
          <img src={post_img} style={{ maxWidth: 'auto', maxHeight: 'auto', width: '100%' }} />
          <Box>
            <PostTitle>{title}</PostTitle>
            <PostGlances>{glances}</PostGlances>
          </Box>
        </Stack>
      </Link>
    </>
  )
}

function FeaturedPost() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PostCategoryTitle>FEATURED POSTS</PostCategoryTitle>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Post
                post_img="https://desktopofsamuel.com/static/3d725af35fa0d9f78a0f775bb1866d96/9fede/20201217-tableofcontent.webp"
                title="Navigating Design Career with Design OKRs"
                glances="Goal setting framework to progress your UX career"
              ></Post>
            </Grid>

            <Grid item xs={12} md={6}>
              <Post
                post_img="https://desktopofsamuel.com/static/3d725af35fa0d9f78a0f775bb1866d96/9fede/20201217-tableofcontent.webp"
                title="How to Create a Scroll Tracking Table of Content in Gatsby?"
                glances="Tutorial on making an article outline responsive to your scrolling using react-scrollspy"
              ></Post>
            </Grid>

            <Grid item xs={12} md={6}>
              <Post
                post_img="https://desktopofsamuel.com/static/3d725af35fa0d9f78a0f775bb1866d96/9fede/20201217-tableofcontent.webp"
                title="How to Create a Scroll Tracking Table of Content in Gatsby?"
                glances="Tutorial on making an article outline responsive to your scrolling using react-scrollspy"
              ></Post>
            </Grid>

            <Grid item xs={12} md={6}>
              <Post
                post_img="https://desktopofsamuel.com/static/9fcb057b2205d382982fa2fe325c7a8f/9fede/Workflow.webp"
                title="How to Organise Design Workflow and Operation in Figma"
                glances="How should we approach to organise our screens, when there are 10+, 100+, or even
                1000+? Here's my struggles & takeaways in organizing Figma."
              ></Post>
            </Grid>

            <Grid item xs={12} md={6}>
              <Post
                post_img="https://desktopofsamuel.com/static/9fcb057b2205d382982fa2fe325c7a8f/9fede/Workflow.webp"
                title="Thanks to Figma Plugins, Automated Work Spares More Time For Design"
                glances="Introducing Figma Plugins, third-party support the up-and-coming interface and prototype design tool that can speed up your design workflow."
              ></Post>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

function PageTitle({ children }) {
  return (
    <Typography variant="h4" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

function PageSubtitle({ children }) {
  return (
    <Typography variant="body1" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  )
}

function PageHeadPart() {
  return (
    <>
      <Container maxWidth="lg">
        <Stack spacing={4} justifyContent="center" alignItems="center">
          <PageTitle>Blog</PageTitle>
          <PageSubtitle>A collection of posts I wrote about design process, technology and productivity.</PageSubtitle>
        </Stack>
      </Container>
    </>
  )
}

export default function About() {
  let [mobile_menu_open, setMobileMenuOpen] = useState(false)

  return (
    <Container maxWidth="xl">
      <Paper elevation={0}>
        <FullPageMobileMenu mobile_menu_open={mobile_menu_open} setMobileMenuOpen={setMobileMenuOpen} />
        <Stack spacing={18} justifyContent="center" alignItems={'center'}>
          <NavMenu setMobileMenuOpen={setMobileMenuOpen} />

          {/* content */}
          <PageHeadPart />
          <FeaturedPost />
          <AllPost />
          {/* content */}
          <ContactsPart />
          <BottomList />
        </Stack>
      </Paper>
    </Container>
  )
}

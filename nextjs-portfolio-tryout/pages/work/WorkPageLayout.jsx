import { Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import * as React from 'react'
import { useState } from 'react'
import { FaCoffee, FaRegCalendarAlt } from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import BottomList from '../../components/BottomList'
import ContactsPart from '../../components/ContactsPart'
import FullPageMobileMenu from '../../components/FullPageMobileMenu'
import NavMenu from '../../components/NavMenu'
import QuoteSvgOpen from '../../components/QuoteSvgOpen'
import remarkGfm from 'remark-gfm'
import remarkFrontMatter from 'remark-frontmatter'
import rehypeRaw from 'rehype-raw'

function PageContent() {
  let theme = useTheme()
  return (
    <Container maxWidth="md">
      <Stack spacing={15}>
        <Stack spacing={3}>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.secondary.main, opacity: 0.7, fontWeight: 'bold' }}
            align="center"
          >
            CASE STUDIES — 2021 - NOW 123321
          </Typography>
          <Stack spacing={1}>
            <Typography
              variant="h4"
              align="center"
              sx={{ color: theme.palette.secondary.main, opacity: 0.9, fontWeight: 'bold' }}
            >
              Enhancing Stock Trading Experience{' '}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: theme.palette.secondary.main, opacity: 0.7, fontWeight: 'bold' }}
            >
              HSBC @ Protiviti
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Grid
            container
            flexDirection="row"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={8}>
              <Stack direction="column" rowGap={5}>
                <Grid container>
                  <Grid item xs={2}>
                    <QuoteSvgOpen />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
                      In 2021, I have joined HSBC's Wealth & Personal Banking team as a UX/UI
                      consultant.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs={2}>
                    <QuoteSvgOpen />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', opacity: 0.9 }}>
                      Primarily I have been working on equities projects, a revamped online stock
                      trading platform for Hong Kong, China and US stock markets, which was launched
                      in 2021 July.
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={4} container flexDirection="column" rowGap={5}>
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <FiSmartphone color={theme.palette.primary.main} sx={{ opacity: 0.6 }} />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', opacity: 0.6 }}
                    align="center"
                  >
                    PLATFORM
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', opacity: 0.9 }}
                  align="center"
                >
                  Browser
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <FaRegCalendarAlt color={theme.palette.secondary.main} sx={{ opacity: 0.9 }} />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', opacity: 0.6 }}
                    align="center"
                  >
                    TIMELINE
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', opacity: 0.9 }}
                  align="center"
                >
                  2021 Jan - Now
                </Typography>
              </Stack>
              <Stack spacing={1}>
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <FaCoffee color={theme.palette.secondary.main} sx={{ opacity: 0.9 }} />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', opacity: 0.6 }}
                    align="center"
                  >
                    TYPE
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', opacity: 0.9 }}
                  align="center"
                >
                  Full-time
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack rowGap={10} justifyContent="center">
          <Stack rowGap={5} justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              ROLE
            </Typography>

            <Typography variant="h6">
              Working in the equities products, my role mainly focused on with designing UI and UX
              journeys, working closely with product, business and the development team.
            </Typography>
          </Stack>

          <Stack justifyContent="center" alignItems="center" spacing={1}>
            <img
              src="https://desktopofsamuel.com/60c4f072d15b140650eabe47dd0fed17/HSBC-Role.svg"
              style={{ maxWidth: '80%', width: 'auto', height: 'auto' }}
            />
            <Stack spacing={1} alignItems="center">
              <Typography>Interface Design</Typography>
              <Typography>Prototype Design</Typography>
              <Typography>User Testing</Typography>
            </Stack>
          </Stack>
          <Stack justifyContent="center" alignItems="center">
            <img
              src="https://desktopofsamuel.com/static/5074300d5529e48eb8e581009b23d8ec/e2782/hsbc-crop-cover.webp"
              style={{ maxWidth: '80%', width: 'auto', height: 'auto' }}
            />
          </Stack>
        </Stack>

        <Stack rowGap={10} justifyContent="center">
          <Stack rowGap={5} justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Building professional stock trading and analysis interface
            </Typography>
            <Typography variant="h6">
              Improving the feature set of newly revamped stock trading platform, I designed
              responsive interfaces for enhancing professional traders' journey using Sketch. For
              example, working with data provided from Thompson Reuters, new data visualisation for
              ESG (Environment, Social and Corporate Governance) will able to provide new investment
              strategy data for traders. The design process also include designing with realistic
              data using tools like Data Populator using JSON data feed.
            </Typography>
          </Stack>

          <Stack rowGap={5} justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              User testing for design validation
            </Typography>
            <Typography variant="h6">
              I also liaised with external agency regularly to conduct face-to-face user testing
              session for design validation. Using InVision and Sketch, I created high-fidelity
              mock-ups and interactive prototypes for user testing session. Research reports will
              then able to identify potential usability issues and find solutions that drives our
              team’s design iterations.
            </Typography>
          </Stack>

          <Stack rowGap={5} justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Adopting UI toolkits and global design review
            </Typography>
            <Typography variant="h6">
              Coming from start-up background, working in a corporate with hundreds of designers
              mean I had more exposure to design governance and structure. Not only did I adopt UI
              component library for my design, working along side with design guild for new
              components to be adopted. I took the responsibility to present the design to a panel
              of design leads and stakeholders for approval.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default function WorkCmhk({ body }) {
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

            {/* content here ? */}

            <ReactMarkdown
              remarkPlugins={[remarkFrontMatter, remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{}}
            >
              {body}
            </ReactMarkdown>

            <PageContent />

            {/* content here ? */}
            <ContactsPart />
            <BottomList />
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

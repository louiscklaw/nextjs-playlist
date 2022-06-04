import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'
import StickyBox from 'react-sticky-box'
import BottomList from '../components/BottomList'
import ContactsPart from '../components/ContactsPart'
import FullPageMobileMenu from '../components/FullPageMobileMenu'
import NavMenu from '../components/NavMenu'
import PageSubtitle from '../components/PageSubtitle'
import PageTitle from '../components/PageTitle'
import PostDate from '../components/PostDate'
import TestTableOfContent from '../components/TestTableOfContent'
import BlogH3 from '../components/BlogH3'
import BlogBody from '../components/BlogBody'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkFrontMatter from 'remark-frontmatter'
import rehypeRaw from 'rehype-raw'
import { date, markdown } from './MdPage1'

function BlogSection({ children }) {
  return <Stack spacing={2}>{children}</Stack>
}

function BlogContent({ sectionRefs }) {
  return (
    <>
      <Stack spacing={8}>
        <Box sectionRef={sectionRefs[0]}>
          <PostDate>MAR 09, 2021</PostDate>

          <PageTitle>Navigating Design Career with Design OKRs</PageTitle>
          <PageSubtitle>Goal setting framework to progress your UX career</PageSubtitle>
        </Box>
        <Box sectionRef={sectionRefs[0]}>
          <img
            src="https://desktopofsamuel.com/static/f0496bf5e98a041cbd119a9d5361778f/9fede/20210309-DesignOKR.webp"
            style={{ maxWidth: 'auto', maxHeight: 'auto', width: '100%' }}
          />
          <BlogBody>
            Finding the right path in your design career can be difficult. When you don't realize
            the goals or don't know if you are making progress every day. OKRs (Objectives & Key
            Results) is a goal framework adopted by companies like Google to define and track goals.
            Instead of using it for company goals and business objectives, I'm using the same
            methodology for personal career planning, Here're my experience and reflection
            practicing Design OKRs for the last 8 months.
          </BlogBody>
        </Box>

        <BlogSection>
          <BlogH3 sectionRef={sectionRefs[0]}>Background</BlogH3>

          <BlogBody>
            I first read about OKR for self-learning, is from Sophia Li's github page. I already
            knew about OKRs back then but it never occurred to me to use it personally. It was a
            hard time for me as I was on furlough in my previous company after the initial wave of
            COVID-19. There was not even a timeline on when I could get back to work. Reading
            Sophia's progress and her OKR planning was a revelation. I started to use it for
            planning my career, tracking my progress for job hunting.
          </BlogBody>
        </BlogSection>

        <BlogSection>
          <BlogH3 sectionRef={sectionRefs[1]}>Plan, Focus, Reflect: A loop to make progress</BlogH3>
          <BlogBody>
            Just like this, work on delivering your key results every day and take an uninterrupted
            hour at the end of each month to reflect, plan and mark your progress in Notion. Finding
            a friend hosting the review session with yourself is also useful too. For me, the target
            was a bit ambitious and I did not complete all the objectives and tasks that I have set
            at the beginning of the quarter. Frankly, only few tasks have met the target. But I am
            very satisfied with this framework, which allows me to set a clear direction and to
            review it regularly.
          </BlogBody>

          <BlogBody>
            This quote shares the same way I feel when I practice Design OKR. As long as I'm
            incrementally better than myself yesterday, no matter how small the changes I make, it
            could have compound effect toward a success. Now that a big objective of my Design OKR
            has completed, I'm still searching for my next one, could be building my own product,
            earning side income, or for real to speak at design events. Before that happens, let me
            know what you think about this approach on Twitter and I would love to answer any of
            your questions!
          </BlogBody>
        </BlogSection>

        <BlogSection>
          <BlogH3 sectionRef={sectionRefs[2]}>this is helloworld</BlogH3>
          <BlogBody>
            Just like this, work on delivering your key results every day and take an uninterrupted
            hour at the end of each month to reflect, plan and mark your progress in Notion. Finding
            a friend hosting the review session with yourself is also useful too. For me, the target
            was a bit ambitious and I did not complete all the objectives and tasks that I have set
            at the beginning of the quarter. Frankly, only few tasks have met the target. But I am
            very satisfied with this framework, which allows me to set a clear direction and to
            review it regularly.
          </BlogBody>

          <BlogBody>
            This quote shares the same way I feel when I practice Design OKR. As long as I'm
            incrementally better than myself yesterday, no matter how small the changes I make, it
            could have compound effect toward a success. Now that a big objective of my Design OKR
            has completed, I'm still searching for my next one, could be building my own product,
            earning side income, or for real to speak at design events. Before that happens, let me
            know what you think about this approach on Twitter and I would love to answer any of
            your questions!
          </BlogBody>
        </BlogSection>
      </Stack>
    </>
  )
}

export default function TestPage() {
  let height_100vh = use100vh()
  let [mobile_menu_open, setMobileMenuOpen] = useState(false)
  const sectionRefs = [useRef(null), useRef(null), useRef(null)]

  let [h1_array, setH1Array] = useState([])
  let [h1_element, setH1Element] = useState([])

  // const toc_active = useScrollSpy({
  //   sectionElementRefs: h1_element,
  //   offsetTop: 20,
  //   offsetBottom: 20,
  // })

  let [toc_active, setTocActive] = useState(0)

  useEffect(() => {
    let temp = []
    let temp_els = []
    document.querySelectorAll('.markdown-subtitle').forEach(el => temp.push(el.textContent))
    setH1Array(temp)
  }, [])

  useEffect(() => {
    let h1_array_offset_top = []

    document
      .querySelectorAll('.markdown-subtitle')
      .forEach(el => h1_array_offset_top.push(el.offsetTop))

    const scrollHandler = () => {
      const scrollPosition =
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop)

      console.log({ scrolling: true, scrollPosition, h1_array_offset_top })

      for (let i = h1_array_offset_top.length; i > -1; i--) {
        if (scrollPosition > h1_array_offset_top[i]) {
          setTocActive(i)
          break
        }
      }
    }

    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <Container maxWidth="xl">
      <Paper elevation={0}>
        <FullPageMobileMenu
          mobile_menu_open={mobile_menu_open}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Stack spacing={18} justifyContent="center" alignItems={'center'}>
          <NavMenu setMobileMenuOpen={setMobileMenuOpen} />

          {/* content */}
          <Container maxWidth="xl">
            <Grid container spacing={5}>
              <Grid item xs={12} md={8}>
                <Stack spacing={2}>
                  <PostDate>{date}</PostDate>
                  <ReactMarkdown
                    remarkPlugins={[remarkFrontMatter, remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      // Map `h1` (`# heading`) to use `h2`s.
                      h1: ({ children, ...props }) => {
                        return <PageTitle className="markdown-title">{children}</PageTitle>
                      },
                      h2: ({ children, ...props }) => {
                        return <PageSubtitle className="markdown-subtitle">{children}</PageSubtitle>
                      },
                      h3: ({ children, ...props }) => {
                        return (
                          <BlogH3 className="markdown-subtitle" pt="1rem" pb="1rem">
                            {children}
                          </BlogH3>
                        )
                      },
                      p: ({ children }) => {
                        return <BlogBody>{children}</BlogBody>
                      },
                      img: ({ src, ...props }) => {
                        return (
                          <img
                            src={src}
                            style={{
                              maxWidth: 'auto',
                              maxHeight: 'auto',
                              width: '100%',
                              borderRadius: '0.5rem',
                            }}
                          />
                        )
                      },
                      object: props => {
                        return <>{JSON.stringify(props)}</>
                      },
                      // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                      em: ({ node, ...props }) => <i style={{ color: 'red' }} {...props} />,
                    }}
                  >
                    {markdown}
                  </ReactMarkdown>
                </Stack>
              </Grid>
              <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                <StickyBox>
                  <TestTableOfContent toc_active={toc_active} toc_list={h1_array} />
                </StickyBox>
              </Grid>
            </Grid>
          </Container>

          {/* content */}

          <ContactsPart />
          <BottomList />
        </Stack>
      </Paper>
    </Container>
  )
}

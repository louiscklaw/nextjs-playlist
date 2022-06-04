import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'
import StickyBox from 'react-sticky-box'
import BottomList from '../../components/BottomList'
import ContactsPart from '../../components/ContactsPart'
import FullPageMobileMenu from '../../components/FullPageMobileMenu'
import NavMenu from '../../components/NavMenu'
import PageSubtitle from '../../components/PageSubtitle'
import PageTitle from '../../components/PageTitle'
import PostDate from '../../components/PostDate'
import TestTableOfContent from '../../components/TestTableOfContent'
import BlogH3 from '../../components/BlogH3'
import BlogBody from '../../components/BlogBody'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkFrontMatter from 'remark-frontmatter'
import rehypeRaw from 'rehype-raw'
import { date, markdown } from './MdPage1'

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

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Container, Box, Grid, Paper, Stack, Typography } from '@mui/material'
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
import Link from '../../src/Link'

const ResponsiveImage = props => <Image alt={props.alt} layout="responsive" {...props} />

const components = {
  img: ThemeImg,
  h1: ThemeH1,
  h2: ThemeH2,
  h3: ThemeH3,
  p: ThemeP,
  em: ThemeDebug,
}

export function MyComponent() {
  return <>MyComponent helloworld</>
}

export function MyLayoutComponent(props) {
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
    <>
      <Container maxWidth="xl">
        <Paper elevation={0}>
          <FullPageMobileMenu
            mobile_menu_open={mobile_menu_open}
            setMobileMenuOpen={setMobileMenuOpen}
          />
          <Stack spacing={{ xs: 10, md: 18 }} justifyContent="center" alignItems={'center'}>
            <NavMenu setMobileMenuOpen={setMobileMenuOpen} />
            <Container maxWidth="xl">
              <Grid container spacing={5}>
                <Grid item xs={12} md={8}>
                  <Stack spacing={2}>
                    <MDXProvider components={components}>
                      <main {...props} />
                    </MDXProvider>
                  </Stack>
                </Grid>
                <Grid item xs={0} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                  <StickyBox>
                    <TestTableOfContent toc_active={toc_active} toc_list={h1_array} />
                  </StickyBox>
                </Grid>
              </Grid>
            </Container>

            <ContactsPart />
            <BottomList />
          </Stack>
        </Paper>
      </Container>
    </>
  )
}

export function ThemeH1({ children }) {
  return (
    <>
      <PageTitle className="markdown-title">{children}</PageTitle>
    </>
  )
}

export function ThemeH2({ children }) {
  return (
    <>
      <PageSubtitle className="markdown-subtitle">{children}</PageSubtitle>
    </>
  )
}

export function ThemeH3({ children }) {
  return (
    <>
      <BlogH3 className="markdown-subtitle" pt="1rem" pb="1rem">
        {children}
      </BlogH3>
    </>
  )
}

export function ThemeP({ children }) {
  return (
    <>
      <BlogBody className="markdown-body">{children}</BlogBody>
    </>
  )
}

export function ThemeImg({ src }) {
  return (
    <>
      <img
        src={src}
        style={{
          maxWidth: 'auto',
          maxHeight: 'auto',
          width: '100%',
          borderRadius: '0.5rem',
        }}
      />
    </>
  )
}

export function NewWindowLink({ children, link }) {
  return (
    <Link href={link} underline="hover">
      {children}
    </Link>
  )
}

export function GithubLink({ children, repo }) {
  return (
    <Link href={`https://www.github.com/${repo}`} underline="hover">
      {children}
    </Link>
  )
}

export function ThemeDebug({ children }) {
  return <>{children}</>
}

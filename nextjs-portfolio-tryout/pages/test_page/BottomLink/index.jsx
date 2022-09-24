import {
  Button,
  Box,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState, useMemo } from 'react';
import { FaLink, FaChevronDown } from 'react-icons/fa';
import { FiAlertCircle } from 'react-icons/fi';

export function BottomLinkButton({ text, href = '/', button_active = false }) {
  let test_ref = useRef();
  let [active_color, setActiveColor] = useState(button_active);

  const handleMouseEnter = () => setActiveColor(true);
  const handleMouseLeave = () => setActiveColor(button_active);

  useEffect(() => {
    test_ref.current.addEventListener('mouseenter', handleMouseEnter);
    test_ref.current.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      test_ref.current?.removeEventListener('mouseenter', handleMouseEnter);
      test_ref.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Link href={href}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          style={{
            backgroundColor: active_color ? '#F39C12' : 'unset',
            padding: '10px 20px',
            cursor: 'pointer',
            height: '2rem',
          }}
          ref={test_ref}
        >
          <FaLink />
          <Typography variant={'body1'}>{text}</Typography>
        </Stack>
      </Link>
    </>
  );
}

export default function BottomLink() {
  let menu_ref = useRef();
  let [show_scroll_down_to_see_menu_button, setShowScrollDownToSeeMenuButton] =
    useState(true);

  const handleScrolling = () => {
    if (window.scrollY > 0) {
      setShowScrollDownToSeeMenuButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);

    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  }, []);

  return (
    <>
      {show_scroll_down_to_see_menu_button ? (
        <Box style={{ position: 'absolute', bottom: '1rem', left: '2rem' }}>
          <Button size="small" color="secondary" variant="contained">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <FiAlertCircle />
              <Typography variant="body2">Scroll down to see menu</Typography>
              <FiAlertCircle />
            </Stack>
          </Button>
        </Box>
      ) : (
        <></>
      )}
      <Grid
        ref={menu_ref}
        container
        style={{
          backgroundColor: '#2C3E50',
          color: 'white',
          padding: '0 10px',
        }}
      >
        <Grid item xs={6}>
          <Stack direction="row" spacing={0}>
            <BottomLinkButton
              text={'project'}
              href="/home"
              button_active={true}
            />
            <BottomLinkButton text={'about'} href="/test_page/about_louis" />
            <BottomLinkButton text={'credit'} href="/test_page/credit" />
            <BottomLinkButton text={'dashboard'} href="/test_page/dashboard" />
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          container
          justifyContent="flex-end"
          alignItems="center"
        >
          <Typography variant={'body1'}>
            💖 coded by louiscklaw. Built on the solder of{' '}
            <Link href="https://www.google.com" passHref>
              <MuiLink color="#ffffff" target="_blank">
                {' '}
                THESE GIANTS{' '}
              </MuiLink>
            </Link>
            2022
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

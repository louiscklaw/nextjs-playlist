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
import { useEffect, useRef, useState } from 'react';
import { FaLink } from 'react-icons/fa';

export function BottomLinkButton1({ text, href = '/', button_active = false }) {
  let test_ref = useRef();

  return (
    <>
      <Link href={href}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          style={{
            backgroundColor: button_active ? '#F39C12' : 'unset',
            padding: '10px 20px',
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
  return (
    <>
      <Grid
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
            <BottomLinkButton text={'credit'} />
            <BottomLinkButton text={'dashboard'} />
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
                THESE GIANTS
              </MuiLink>
            </Link>{' '}
            2022
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

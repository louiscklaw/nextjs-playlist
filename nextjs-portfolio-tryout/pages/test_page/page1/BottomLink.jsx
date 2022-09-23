import {
  Button,
  Box,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
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

  useEffect(() => {
    test_ref.current.addEventListener('mouseenter', event => {
      console.log('mouse enter occured');
      setActiveColor(true);
    });
    test_ref.current.addEventListener('mouseleave', event => {
      console.log('mouse leave occured');
      setActiveColor(button_active);
    });

    return () => {
      test_ref.current?.removeEventListener('mouseenter');
      test_ref.current?.removeEventListener('mouseleave');
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
        spacing={2}
        style={{
          backgroundColor: '#2C3E50',
          color: 'white',
          padding: '0 10px',
        }}
      >
        <Grid item xs={6} spacing={2}>
          <Stack direction="row" spacing={0}>
            <BottomLinkButton
              text={'project'}
              href="/home"
              button_active={true}
            />
            <BottomLinkButton text={'about'} />
            <BottomLinkButton text={'credit'} />
            <BottomLinkButton text={'dashboard'} />
          </Stack>
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <Typography variant={'body1'}>coded by louiscklaw</Typography>
        </Grid>
      </Grid>
    </>
  );
}

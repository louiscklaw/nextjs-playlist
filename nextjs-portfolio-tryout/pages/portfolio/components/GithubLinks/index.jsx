import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default ({ href }) => {
  return (
    <>
      <Link href={href} passHref>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant={'body1'}>{href}</Typography>
          <>
            <FaGithub />
            <FaExternalLinkAlt />
          </>
        </Stack>
      </Link>
    </>
  );
};

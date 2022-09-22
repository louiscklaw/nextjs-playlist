import { Box, Grid, Stack, Typography } from '@mui/material';
import {
  FaBeer,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaSlack,
  FaFigma,
  FaWhatsapp,
} from 'react-icons/fa';

export default function NameCard() {
  return (
    <>
      <Box>
        <Typography>Louis Law</Typography>
        <Typography>@louiscklaw</Typography>
        <Typography>validation engineer</Typography>
        <Typography>developer</Typography>
        <FaBeer />
        <FaWhatsapp />
        <FaPhoneAlt />
        <FaGithub />
        <FaLinkedinIn />
        <FaSlack />
        <FaFigma />
      </Box>
    </>
  );
}

import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

// testing
let test_toc_list = [
  'Background',
  'What is OKRs?',
  'Switching OKRs for Career Planning?',
  'How to use Design OKR? Design OKR template for you to kickstart',
  'Plan, Focus, Reflect: A loop to make progress',
  'OKR for Job Searching',
  'To Be Continued...',
];

export default function TestTableOfContent({ toc_active, toc_list }) {
  // let [toc_active, setTocActive] = React.useState(4)
  let [is_over, setIsOver] = React.useState(null);

  return (
    <>
      <Stack spacing={3}>
        <Typography sx={{ opacity: 0.9 }}>Table of content</Typography>
        <Box>
          {toc_list.map((item, index) => {
            let isActive = index == toc_active;
            let isOver = index == is_over;
            return (
              <>
                <Box
                  p="0.5rem"
                  sx={{
                    borderLeft: isActive
                      ? '5px solid #800000'
                      : '1px solid #ddd',
                    opacity: 0.9,
                    backgroundColor: isActive
                      ? 'rgba(128, 0, 0, 0.05)'
                      : isOver
                      ? 'rgba(128, 128, 128, 0.1)'
                      : 'transparent',
                  }}
                  pl="1rem"
                  onMouseOver={() => setIsOver(index)}
                  onMouseOut={() => setIsOver(null)}
                  // onClick={() => setTocActive(index)}
                >
                  <Typography
                    variant={'body1'}
                    sx={{
                      fontWeight: isActive ? 'bold' : 'none',
                      opacity: 0.9,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              </>
            );
          })}
        </Box>
      </Stack>
    </>
  );
}

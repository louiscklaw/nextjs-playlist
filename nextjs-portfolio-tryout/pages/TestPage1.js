import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

let toc_list = [
  'Background',
  'What is OKRs?',
  'Switching OKRs for Career Planning?',
  'How to use Design OKR? Design OKR template for you to kickstart',
  'Plan, Focus, Reflect: A loop to make progress',
  'OKR for Job Searching',
  'To Be Continued...',
];

function TableOfContent() {
  let [toc_active, setTocActive] = React.useState(4);
  let [is_over, setIsOver] = React.useState(null);

  return (
    <>
      <Box m="5rem">
        {toc_list.map((item, index) => {
          let isActive = index == toc_active;
          let isOver = index == is_over;
          return (
            <>
              <Box
                p="1rem"
                sx={{
                  borderLeft: isActive ? '5px solid #800000' : '1px solid #ddd',
                  backgroundColor: isActive
                    ? 'rgba(128, 0, 0, 0.05)'
                    : isOver
                    ? 'rgba(128, 128, 128, 0.1)'
                    : 'transparent',
                }}
                pl="2rem"
                onMouseOver={() => setIsOver(index)}
                onMouseOut={() => setIsOver(null)}
                onClick={() => setTocActive(index)}
              >
                <Typography
                  variant={'body1'}
                  sx={{ fontWeight: isActive ? 'bold' : 'none' }}
                >
                  {item}
                </Typography>
              </Box>
            </>
          );
        })}
      </Box>
      <pre>{JSON.stringify(toc_list, null, 2)}</pre>
    </>
  );
}

export default function TestPage() {
  return (
    <>
      <TableOfContent />
    </>
  );
}

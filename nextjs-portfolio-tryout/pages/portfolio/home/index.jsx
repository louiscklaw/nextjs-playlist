import { Box, Grid, Stack } from '@mui/material';
import BottomLink from '../BottomLink';
import NameCard from '../NameCard';
import ProjectBox from './ProjectBox';
import test_project_background_avif from './test_project_background.avif';
import tradingview_screenshot_png from '../project1/tradingview-screenshot.png';

export default function HelloworldPage() {
  return (
    <>
      <Stack flexDirection={'column'}>
        <Grid container style={{ width: 'calc( 100vw -0.1px )' }}>
          <Grid
            item
            style={{
              height: 'calc( 100vh / 4 )',
              width: 'calc( ( 100% / 7 ) * 2 )',
            }}
          >
            <Box style={{ height: '100%' }}>
              <NameCard />
            </Box>
          </Grid>
          <Grid
            item
            style={{
              height: 'calc( 100vh / 4 )',
              width: 'calc( 100% / 7 )',
            }}
          >
            <ProjectBox
              href={'project1'}
              image_src={tradingview_screenshot_png.src}
              text={'project1'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project2'}
              image_src={test_project_background_avif.src}
              text={'project2'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project3'}
              image_src={test_project_background_avif.src}
              text={'project3'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project4'}
              image_src={test_project_background_avif.src}
              text={'project4'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project1'} />
          </Grid>
        </Grid>
        <BottomLink />
      </Stack>
    </>
  );
}

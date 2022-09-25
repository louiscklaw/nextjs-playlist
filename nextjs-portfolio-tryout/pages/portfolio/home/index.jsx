import { Box, Grid, Stack } from '@mui/material';
import BottomLink from '../BottomLink';
import NameCard from '../NameCard';
import ProjectBox from './ProjectBox';
import test_project_background_avif from './test_project_background.avif';

// project thumbnails
import tradingview_screenshot_png from '../project01/tradingview-screenshot.png';
import appiumbehavenotes_thumbnail_png from '../project02/appiumbehavenotes_thumbnail.png';
import allwinner_v3s_tryout_jpg from '../project03/ccbdbbdd9eb76be469a343462f7729be.jpg';

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
              href={'project01'}
              image_src={tradingview_screenshot_png.src}
              text={'project1'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project02'}
              image_src={appiumbehavenotes_thumbnail_png.src}
              text={'project2'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project03'}
              image_src={allwinner_v3s_tryout_jpg.src}
              text={'project3'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project04'}
              image_src={test_project_background_avif.src}
              text={'project4'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project05'} />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project06'} />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project07'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project08'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project09'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project10'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project11'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project12'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project13'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project14'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project15'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project16'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project17'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project18'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project19'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project20'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project21'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project22'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project23'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project24'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project25'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project26'} />
          </Grid>
        </Grid>
        <BottomLink />
      </Stack>
    </>
  );
}

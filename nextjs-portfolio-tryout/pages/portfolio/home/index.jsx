import { Box, Grid, Stack } from '@mui/material';
import BottomLink from '../BottomLink';
import NameCard from '../NameCard';
import ProjectBox from './ProjectBox';
import test_project_background_avif from './test_project_background.avif';

// project thumbnails
import tradingview_screenshot_png from '../project01/tradingview-screenshot.png';
import appiumbehavenotes_thumbnail_png from '../project02/appiumbehavenotes_thumbnail.png';
import allwinner_v3s_tryout_jpg from '../project03/ccbdbbdd9eb76be469a343462f7729be.jpg';
import youtubesplitviewtryout_thumbnail_png from '../project04/youtubesplitviewtryout_thumbnail.png';
import vorontryout_thumbnail_png from '../project05/vorontryout_thumbnail.png';
import t79d8c82649563e29b20c231b6bfd1efd_svg from '../project06/79d8c82649563e29b20c231b6bfd1efd.svg';
import tappy_thumbnail_png from '../project07/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project08/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project09/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project10/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project11/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project12/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project13/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project14/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project15/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project16/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project17/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project18/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project19/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project20/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project21/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project22/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project23/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project24/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project25/tappy_thumbnail.png';
// import tappy_thumbnail_png from '../project26/tappy_thumbnail.png';

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
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project05'}
              image_src={vorontryout_thumbnail_png.src}
              text={'project5'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project06'}
              image_src={t79d8c82649563e29b20c231b6bfd1efd_svg.src}
              text={'project4'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project07'}
              image_src={tappy_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project08'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project09'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project10'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project11'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project12'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project13'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project14'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project15'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project16'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project17'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project18'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project19'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project20'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project21'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project22'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project23'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project24'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project25'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project26'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project4'}
            />
          </Grid>
        </Grid>
        <BottomLink />
      </Stack>
    </>
  );
}

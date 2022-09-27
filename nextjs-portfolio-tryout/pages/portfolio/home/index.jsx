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
import project08_thumbnail from '../project08/slic3r_thumbnail.png';
import project09_thumbnail from '../project09/project_thumbnail.png';
import project10_thumbnail from '../project10/project_thumbnail.png';
import project11_thumbnail from '../project11/project_thumbnail.png';
import project12_thumbnail from '../project12/project_thumbnail.png';
import project13_thumbnail from '../project13/project_thumbnail.png';
import project14_thumbnail from '../project14/project_thumbnail.png';
import project15_thumbnail from '../project15/project_thumbnail.png';
// import project16_thumbnail from '../project16/project_thumbnail.png';
// import project17_thumbnail from '../project17/project_thumbnail.png';
// import project18_thumbnail from '../project18/project_thumbnail.png';
// import project19_thumbnail from '../project19/project_thumbnail.png';
// import project20_thumbnail from '../project20/project_thumbnail.png';
// import project21_thumbnail from '../project21/project_thumbnail.png';
// import project22_thumbnail from '../project22/project_thumbnail.png';
// import project23_thumbnail from '../project23/project_thumbnail.png';
// import project24_thumbnail from '../project24/project_thumbnail.png';
// import project25_thumbnail from '../project25/project_thumbnail.png';
// import project26_thumbnail from '../project26/project_thumbnail.png';

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
              text={'project01'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project02'}
              image_src={appiumbehavenotes_thumbnail_png.src}
              text={'project02'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project03'}
              image_src={allwinner_v3s_tryout_jpg.src}
              text={'project03'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project04'}
              image_src={youtubesplitviewtryout_thumbnail_png.src}
              text={'project04'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project05'}
              image_src={vorontryout_thumbnail_png.src}
              text={'project05'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project06'}
              image_src={t79d8c82649563e29b20c231b6bfd1efd_svg.src}
              text={'traefik docker'}
            />
          </Grid>
          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project07'}
              image_src={tappy_thumbnail_png.src}
              text={'project07'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project08'}
              image_src={project08_thumbnail.src}
              text={'project08'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project09'}
              image_src={project09_thumbnail.src}
              text={'project09'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project10'}
              image_src={project10_thumbnail.src}
              text={'project10'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project11'}
              image_src={project11_thumbnail.src}
              text={'project11'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project12'}
              image_src={project12_thumbnail.src}
              text={'project12'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project13'}
              image_src={project13_thumbnail.src}
              text={'project13'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project14'}
              image_src={project14_thumbnail.src}
              text={'project14'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project15'}
              image_src={project15_thumbnail.src}
              text={'project15'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'appium_projects'}
              image_src={''}
              text={'appium, selenium'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project17'}
              image_src={''}
              text={'nighthawk cypress puppeteer playwright'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project18'}
              image_src={''}
              text={'react nextjs expo'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox
              href={'project19'}
              image_src={''}
              text={'lynked.cp.jp'}
            />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project20'} image_src={''} text={'fusion360'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project21'} image_src={''} text={''} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project22'} image_src={''} text={'project22'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project23'} image_src={''} text={'project23'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project24'} image_src={''} text={'project24'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project25'} image_src={''} text={'project25'} />
          </Grid>

          <Grid
            item
            style={{ height: 'calc( 100vh / 4 )', width: 'calc( 100% / 7 )' }}
          >
            <ProjectBox href={'project26'} image_src={''} text={'project26'} />
          </Grid>
        </Grid>
        <BottomLink />
      </Stack>
    </>
  );
}

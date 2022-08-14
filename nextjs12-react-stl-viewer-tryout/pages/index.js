import Head from 'next/head'
import { StlViewer } from 'react-stl-viewer'

const url = 'https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl'

const style = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      helloworld
      <StlViewer style={style} orbitControls shadows url={url} />
    </div>
  )
}

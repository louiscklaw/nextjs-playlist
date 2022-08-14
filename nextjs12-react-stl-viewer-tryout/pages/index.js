import Head from 'next/head'
import { useRef } from 'react'
import { StlViewer } from 'react-stl-viewer'

const url = 'https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl'

const style = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
}

export default function Home() {
  const ref = useRef()
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      helloworld
      <StlViewer
        style={style}
        orbitControls
        shadows
        showAxes
        floorProps={{ gridWidth: 300 }}
        url={url}
        modelProps={{
          positionX: 150,
          positionY: 150,
          scale: 1,
          color: '#008675',
          ref,
        }}
        onFinishLoading={console.log}
      />
    </div>
  )
}

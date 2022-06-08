import Head from 'next/head'
import StickyBox from 'react-sticky-box'

export default function Home() {
  return (
    <div className="container">
      <main>
        <div style={{ height: '400px', backgroundColor: 'tomato' }}>header</div>

        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <StickyBox>
            <div style={{ height: '100px', backgroundColor: 'cyan' }}>
              Sidebar <button variant="contained">Hello World</button>
            </div>
          </StickyBox>
          <div style={{ height: '900px', backgroundColor: 'gold' }}>
            Main Content <button variant="contained">Hello World</button>
          </div>
        </div>
        <div style={{ height: '800px', backgroundColor: 'tomato' }}>
          footer <button variant="contained">Hello World</button>
        </div>
      </main>
    </div>
  )
}

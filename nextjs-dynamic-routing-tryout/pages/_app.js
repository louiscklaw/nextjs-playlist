// import App from 'next/app'
import LangContextProvider from '../context/LangContext';

function MyApp({ Component, pageProps }) {

  return (
    <LangContextProvider>
      <Component {...pageProps} />
      <style jsx global>{`
      * {
          padding: 0px; margin: 0px; box-sizing: border-box;
        }
      `}</style>
    </LangContextProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp

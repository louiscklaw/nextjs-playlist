import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://browser.sentry-cdn.com/5.15.5/bundle.min.js"
            integrity="sha384-wF7Jc4ZlWVxe/L8Ji3hOIBeTgo/HwFuaeEfjGmS3EXAG7Y+7Kjjr91gJpJtr+PAT"
            crossOrigin="anonymous"
          ></script>
          <script src="init_sentry.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          <button onClick="(e) => {test(e)}">ttt</button>
        </body>
      </Html>
    )
  }
}

export default MyDocument

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
        </Head>
        <body>
          <Main />
          <NextScript />

          <a href="#">click test</a>
          <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>

          <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-analytics.js"></script>

          <script src="ga.js" />


        </body>
      </Html>
    )
  }
}

export default MyDocument

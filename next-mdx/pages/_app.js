import { MDXProvider } from "@mdx-js/react";
import { Header } from "../components/Header.js";

const components = {
  h1: Header,
};

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

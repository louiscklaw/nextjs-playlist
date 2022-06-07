// https://nextjs.org/docs/advanced-features/using-mdx

import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import { Heading_H1 } from "./my-components";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  h1: Heading_H1,
};

export default function Post(props) {
  return (
    <>
      <MDXProvider components={components}>
        <main {...props} />
      </MDXProvider>
    </>
  );
}

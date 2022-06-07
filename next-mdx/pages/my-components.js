import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  h1: Heading_H1,
};

export function MyComponent() {
  return <>MyComponent helloworld</>;
}

export function MyLayoutComponent(props) {
  return (
    <>
      <MDXProvider components={components}>
        <main {...props} />
      </MDXProvider>
    </>
  );
}

export function Heading_H1({ children }) {
  return (
    <>
      Heading_H1 {children} {JSON.stringify({ children })}
    </>
  );
}

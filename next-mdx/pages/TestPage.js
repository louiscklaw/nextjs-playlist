import Head from "next/head";

import * as Post from "./Content.mdx";
import Content, { meta } from "./Content.mdx";

import matter from "gray-matter";

export default function TestPage(props) {
  return (
    <>
      Test page{JSON.stringify({ props, meta }, null, 2)}
      <Content />
    </>
  );
}

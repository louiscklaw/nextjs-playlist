import Head from "next/head";

import * as Post from "./Content.mdx";
import Content, { meta } from "./Content.mdx";

import matter from "gray-matter";

export default function Home() {
  return (
    <>
      {JSON.stringify(meta, null, 2)}
      <Content />
    </>
  );
}

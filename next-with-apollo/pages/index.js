import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 40),
    },
  };
}

export default function Home({ countries }) {
  return <div className={styles.grid}>{JSON.stringify(countries)}</div>;
}

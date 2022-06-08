import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Restaurants {
        restaurants {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      countries: data,
    },
  };
}

export default function Home({ countries }) {
  return <pre>{JSON.stringify(countries, null, 2)}</pre>;
}

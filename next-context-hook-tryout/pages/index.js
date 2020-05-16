import React, { Component } from 'react'

import Link from 'next/link';

import fetch from 'isomorphic-unfetch'

import TestComp1 from '../components/TestComp1';
import TestComp2 from '../components/TestComp2';
import TestComp3 from '../components/TestComp3';
import GlobalContextProvider from '../contexts/GlobalContext';

export default class extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    const data = await res.json()

    return {
      title: data.title,
      imageUrl: data.url
    }
  }

  render () {
    return (
      <GlobalContextProvider>
        <TestComp1>
          <TestComp2>

          </TestComp2>
          <TestComp3>

          </TestComp3>
        </TestComp1>

      </GlobalContextProvider>
    )
  }
}
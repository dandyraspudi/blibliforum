import React, { useState } from 'react'
import '../styles/global.scss'
import { AppProps } from 'next/app'
import Layout from '../components/Layout'

export default function App({ Component, router, pageProps }: AppProps) {
  const Layout = Component.getLayout || (page => <Layout children={page} />)
  return (
  	<Layout>
	  <Component {...pageProps}></Component>
	</Layout>)
}

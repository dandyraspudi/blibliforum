import React, { useState } from 'react'
import Head from 'next/head'
import HeaderView from '../Header'
import FooterView from '../Footer'

import { siteTitle } from './index'

export default function MainLayout(
    props: React.ComponentProps<any>
  ): JSX.Element{
  const { className, children, other } = props
  return (
	  <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Blog Blibli.com"
            />
            <meta
            property="og:image"
            content={`https://og-image.now.sh/${encodeURI(
                siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <HeaderView />
        <main>
            {children}
        </main>
		<FooterView />
	  </>
  )
}
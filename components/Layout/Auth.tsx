import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { siteTitle } from './index'

export default function BlankLayout(
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
        <main className="auth-page">
            <div className="bg-container">
                <img src="/images/bg.png" alt="me" className="img-fluid"/>
                <div className="auth-container">
                    <div className="text-center py-5">
                        <a className="navbar-brand m-0" href="#">
                            <Image src="/images/logo.png" alt="me" width="180" height="47" />
                        </a>
                    </div>
                    {children}
                </div>
            </div>
        </main>
	  </>
  )
}
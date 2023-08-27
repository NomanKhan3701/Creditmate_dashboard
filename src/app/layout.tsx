"use client";

import { Font } from '../components/Font'
import Layout from '../components/Layout/Layout'
import '../assets/styles/globals.scss'
import '../assets/styles/Navbar.scss'
import Head from 'next/head'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <Head >
        <title>Buyceps Dashboard</title>
        {/* <link rel="icon" type="image/x-icon" href={'/favicon.png'}></link> */}
      </Head>
      <body>
        <Font />

        <Layout>
          {children}
        </Layout>

      </body>
    </html>
  )
}

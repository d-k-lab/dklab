import '@/styles/styles.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DKLAB</title>
        <link rel="icon" href="/icon/dklab-favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

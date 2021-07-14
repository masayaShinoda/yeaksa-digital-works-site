import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"
import Nav from "../components/nav.js"

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>YeakSa Digital Works</title>
        <meta name="description" content="Design agency based in Phnom Penh with an Esports niche." />
        <link rel="icon" href="/icons/brand-identity-golden-ratio-08_result.ico" />
      </Head>
      <h1 style={{marginTop: `25vh`}}>
        Coming soon
      </h1>
    </Layout>
  )
}

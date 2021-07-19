import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout"
import Nav from "../components/nav"
import Homepage from "../components/homepage"

export default function Home() {
  return (
    <Layout>
      <Homepage />
    </Layout>
  )
}

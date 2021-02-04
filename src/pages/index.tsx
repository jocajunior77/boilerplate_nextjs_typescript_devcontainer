import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'


const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Image
        src="/assets/logo.png"
        alt="Picture of the author"
        width={'100%'}
        height={'100%'}
      />

      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Iso5geducacional.</p>
    </Container>
  )
}

export default Home

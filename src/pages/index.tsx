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

      <h1>Borleiplate</h1>
      <p>A ReactJS + Next.js structure made by Iso5geducacional fork by https://github.com/rocketseat-content/react-nextjs-typescript-structure. </p>
    </Container>
  )
}

export default Home

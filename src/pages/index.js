//components
import Header from '@/components/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-between bg-main-gradient clash-display font-normal text-typography-100'>
      <Head>
        <title>
          Galenomoon | Web Developer & Designer
        </title>
        <meta name="description" content="Welcome to my portifolio" />
        <meta name="og:title" content="Galenomoon | Web Developer & Designer" />
      </Head>
      <Header />
    </main>
  )
}

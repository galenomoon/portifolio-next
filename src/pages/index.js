//components
import Header from '@/components/Header'
import Head from 'next/head'


export default function Home({avatar}) {

  const title = "Galenomoon - Fullstack Developer: Showcasing Programming Skills and Expertise"
  const description = "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities."

  return (
    <main className='flex min-h-screen flex-col justify-between bg-main-gradient clash-display font-normal text-typography-100'>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={avatar} />
        <meta name="og:url" content="https://www.galenomoon.com" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Galenomoon" />
      </Head>
      <Header />
    </main>
  )
}

export async function getServerSideProps(){
  const res = await fetch('https://api.github.com/users/galenomoon')
  const data = await res.json()

  return {
    props: {
      avatar: data.avatar_url
    }
  }
}  
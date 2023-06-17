//components
import Head from 'next/head'
import FirstSection from '@/components/Header'
import RepositoryAndFigma from '@/components/RepositoryAndFigma'
import SkillsAndExperience from '@/components/SkillsAndExperience'

//assets
import banner from '@/assets/banner.png'

export default function Home() {
  const title = "Galenomoon - Fullstack Developer: Showcasing Programming Skills and Expertise"
  const description = "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities."

  return (
    <main className='flex min-h-screen flex-col justify-between bg-main-gradient clash-display font-normal text-typography-100'>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={banner} />
        <meta name="og:url" content="https://www.galenomoon.com" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="Galenomoon" />
      </Head>
      <FirstSection />
      <SkillsAndExperience />
      <RepositoryAndFigma />
    </main>
  )
}

import { createRef, createContext } from "react";

//components
import Head from "next/head";
import Projects from "@/components/Projects";
import FirstSection from "@/components/Header";
import ContactMe from "@/components/ContactMe";
import RepositoryAndFigma from "@/components/RepositoryAndFigma";
import SkillsAndExperience from "@/components/SkillsAndExperience";

//assets
import banner from "@/assets/banner.png";

//context
export const ScrollContext = createContext(null);

export default function Home({ title, description, image }) {
  const ref_first_section = createRef(() => {});
  const ref_skills_and_experience = createRef(() => {});
  const ref_repository_and_figma = createRef(() => {});
  const ref_projects = createRef(() => {});
  const ref_contact = createRef(() => {});

  function scrollTo(ref, is_mobile = false) {
    return ref?.current?.scrollIntoView({
      behavior: is_mobile ? "auto" : "smooth",
    });
  }

  return (
    <ScrollContext.Provider
      value={{
        ref_first_section,
        ref_skills_and_experience,
        ref_repository_and_figma,
        ref_projects,
        ref_contact,
        scrollTo,
      }}
    >
      <main className="flex min-h-screen flex-col justify-between bg-background-night-light clash-display font-normal text-typography-100">
        <Head>
          <title>{title}</title>
          <meta name="og:title" content={title} />
          <meta name="og:image" content={image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="og:type" content="website" />
          <meta name="og:site_name" content="Galenomoon" />
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
          <meta name="og:url" content="https://www.galenomoon.com" />
        </Head>
        <FirstSection />
        <SkillsAndExperience />
        <RepositoryAndFigma />
        <Projects />
        <ContactMe />
      </main>
    </ScrollContext.Provider>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title:
        "Galenomoon - Fullstack Developer: Showcasing Programming Skills and Expertise",
      description:
        "Explore the diverse programming skills and expertise of Galenomoon, a fullstack developer specializing in web and application development. Discover a portfolio featuring innovative projects, cutting-edge technologies, and exceptional problem-solving abilities.",
      image: banner,
    },
  };
}

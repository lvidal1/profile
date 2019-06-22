import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpeg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Leonardo Vidal.
        </BigTitle>
        <Subtitle>Let's focus on innovation.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard title="Jelt" link="/" bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)">
            This project defines a concept of an tracking health history app.
          </ProjectCard>
          <ProjectCard title="Sam" link="/" bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
            This project defines an AI assistant to handle your daily tasks.
          </ProjectCard>
          <ProjectCard title="TemplateIt" link="/" bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)">
            This project defines a tool to translate a image into html components using OpenCV with Python
          </ProjectCard>
          <ProjectCard title="Contribute" link="/" bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)">
            This project defines an app to generate and share entrepreneur ideas.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Leonardo Vidal" />
          <AboutSub>
            I consider knowledge as a superpower, the power to recognize the world; However, using that power to
            innovate with social responsibility will have an impact on the world, making you a real hero.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Day to day, a very first sensation I feel is about awakening with the same curiosity that introduced me to the
          area of technology, the curiosity to know how things work, how the world works. Within a world so volatile and
          digitalized, I feel like a strategic figure, with responsibility and desire to know its increasingly
          opinionated architecture and internal dynamics. Everything according to the objective of contributing and
          being part of the global synergy. Draw lines and connecting points between logical and business processes is
          my daily duty. I love to play as an entity of change, basing my decisions in the knowledge of an environment.
          Analyzing and hunting opportunities. I have purchased a ticket to make part of the change and while you are
          reading this I want to tell you that you are also part of the group. Any idea that is designed to improve the
          lifestyle in a positive way will always be the fuel for sustainable growth.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:lvidal910@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/lvidalio/">LinkedIn</a> &{' '}
            <a href="https://www.instagram.com/lvidal.io/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Portfolio. Powered by&nbsp;
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Gatsby Starter Portfolio Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index

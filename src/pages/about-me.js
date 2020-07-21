import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "./resume.pdf"
import classes from "./about-me.module.css"

const Content = ({ title, children }) => (
  <section className={classes.Content}>
    <h2>{title}</h2>
    {children}
  </section>
)

const AboutMePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About me" />
      <h1>About me</h1>
      <header style={{ display: "flex", marginBottom: rhythm(2.5) }}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={data.author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <p>
          I'm starting my first year at the National University of Singapore in
          2021 studying Computer Science and Mathematics.
        </p>
      </header>

      <Content title="Related links">
        <ul>
          <li>
            <a href={resume}>My resume</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zwliew/">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/zwliew">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/zwliew">GitHub</a>
          </li>
          <li>
            <a href="https://medium.com/@zwliew">Medium</a>
          </li>
          <li>
            <a href="https://stackexchange.com/users/3912119/zwliew">
              Stack Exchange
            </a>
          </li>
          <li>
            <a href="mailto:zhaoweiliew@gmail.com">Email</a>
          </li>
        </ul>
      </Content>

      <Content title="Education">
        <ul>
          <li>
            <strong>Hwa Chong Institution (2013 - 2018)</strong> where I studied
            Computing, Mathematics, Physics, Economics, General Paper and
            Project Work.
          </li>
        </ul>
      </Content>

      <Content title="Work experience">
        <ul>
          <li>
            <strong>Tinkertanker (Jan 2019 - Mar 2019)</strong> where I wrote
            tests and fixed bugs for the Get Hacking Android app, worked on the
            redesign of the Tinkercademy website, built Flask demos, and
            facilitated micro:bit lessons.
          </li>
        </ul>
      </Content>

      <Content title="Achievements">
        <ul>
          <li>
            <strong>Google Code-in 2017 Grand Prize (top 50)</strong> for my
            contributions to open-source projects like JBoss, Wikimedia, and
            Terasology.
          </li>
          <li>
            <strong>
              2018 National Chinese Mobile App Development Competition
              Distinguished Achievement Award (top 5)
            </strong>{" "}
            for my team's mobile game that combines impressive visuals with
            gameplay that appeals to young kids who are learning Chinese.
          </li>
          <li>
            <strong>
              Singapore Science and Engineering Fair 2017 Merit Award
            </strong>{" "}
            for my team's project on improving network routing performance using
            enhanced ant colony optimization techniques.
          </li>
          <li>
            <strong>
              Cyber Defenders Discovery Camp 2020 2nd Place, 2018 Silver Award, 2017 2nd Place
            </strong>{" "}
            for my team's performance in cracking security tasks involving
            binary exploitation, web security, reverse engineering, and more.
          </li>
        </ul>
      </Content>

      <Content title="Extra-curricular activities">
        <ul>
          <li>Infocomm & Robotics Society (2017 - 2018)</li>
          <li>Wushu (2007 - 2016)</li>
        </ul>
      </Content>
    </Layout>
  )
}

export default AboutMePage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`

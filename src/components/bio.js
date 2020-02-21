/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaTwitter, FaMedium } from "react-icons/fa"

import { rhythm } from "../utils/typography"
import classes from "./bio.module.css"

const SocialLink = ({ to, Img, children }) => (
  <li className={classes.SocialLink}>
    <a href={to}>
      <Img></Img>
    </a>
  </li>
)

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
          social {
            twitter
            github
            medium
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
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
      <div>
        <p>
          Written by <strong>{author}</strong> who lives and studies in
          Singapore.
        </p>
        <ul className={classes.SocialLinks}>
          <SocialLink
            Img={FaTwitter}
            to={`https://twitter.com/${social.twitter}`}
          ></SocialLink>
          <SocialLink
            Img={FaGithub}
            to={`https://github.com/${social.github}`}
          ></SocialLink>
          <SocialLink
            Img={FaMedium}
            to={`https://medium.com/@${social.medium}`}
          ></SocialLink>
        </ul>
      </div>
    </div>
  )
}

export default Bio

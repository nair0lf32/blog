import * as React from "react"
import { HeadFC, PageProps, Link } from "gatsby"
import {
  pageStyles, headingStyles, headingAccentStyles,
  paragraphStyles } from "../components/styles"



const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Blog &#x1f4bb;
        <br />
        <span style={headingAccentStyles}>— Welcome to my muthafuckin' blog </span>
      </h1>
      <p style={paragraphStyles}>
        This is my technical blog. <br/>
        Here is a <Link to="/posts/">list of all posts</Link>
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

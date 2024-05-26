import React from "react";
import Layout, { headingStyle, paragraphStyle } from "../components/layout";
import { Link, graphql } from "gatsby";


export const alSiteQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`

export default function Home({data}: any) {
  return (
    <Layout>
      <h1 style={headingStyle}>{data.site.siteMetadata.title}👨🏿‍💻</h1>
      <h2>{data.site.siteMetadata.description}</h2>

      <p style={paragraphStyle}>
        Welcome to my blog...It's powered by <a href="https://gatsbyjs.com">gatsby</a> so you know it is <b>great!</b>
        It got a very minimalistic design on purpose, so you can focus on the content.
        I thought using gatsby for a simple blog would be an "overkill"
        as it's a quite powerful static site generator but it was another occasion to learn and oh boy did
        I learn! Now I can say I hate javascript even more and would like to have a word
        with the guy who thought the world needed graphql...
        Anyway, I actually run multiple blogs and this one right here is an attempt
        to centralize all this mess. I will therefore be writing exclusive tech-related (or not) articles here
        and cross-post SOME of them on my other blogging platforms, which are listed below (not very active yet)
      </p>
      <ul>
      <li><a href="https://medium.com/@nairolf32">medium</a></li>
        <li><a href="https://nairolf32.hashnode.dev/">hashnode</a></li>
	<li><a href="https://hackernoon.com/u/nairolf32">hackernoon</a></li>
	<li><a href="https://dev.to/nair0lf32">dev.to</a></li>
	<li><a href="https://florianedemessi.wordpress.com">wordpress</a></li>
      </ul>
        <p style={paragraphStyle}>
        And below is what I already started to write about:  </p>
      <ul>
      <li><a href="https://dev.nairolf32.com/zer0ne-blog">zer0ne</a>: My Cybersecurity blog</li>
        <li><a href="https://dev.nairolf32.com/mcs">MedicalCheatsheets</a>: A comprehensive knowledge base about medical pathologies</li>
      </ul>

        <p style={paragraphStyle}>
        Ah yes...most importantly for anyone who might actually come across this, I am a terrible
        writer...really...like the worst you might ever heard of. What I am doing here is mostly
        trying to share what I learn and learn technical writing by doing so...
        I am quite open to constructive feedback so feel free to contact me if you have any
        suggestions or if you find any mistakes. Also I am a somewhat busy guy so never expect consistency
        in my writing schedule (this is a freestyle! kek). I write how I feel and when I feel like it.
      </p>

      <p style={{color: "darkblue", fontWeight: "bold"}}>
      All posts/articles can be found <Link to={'/posts'}>here</Link>!
      </p>
      <p><a href="https://github.com/nair0lf32">nairolf32</a> &copy; 2024</p>
    </Layout>
  )
}

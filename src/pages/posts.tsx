import * as React from "react"
import { graphql, Link, PageProps } from "gatsby"
import {
  pageStyles, headingStyles, headingAccentStyles,
  paragraphStyles } from "../components/styles"

export const query = graphql
`query siteIndex {
  site {
    siteMetadata {
      title
      description
    }
  }
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      excerpt(pruneLength: 250)
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
}
`
const PostPage = ({ data }: PageProps<Queries.siteIndexQuery>)  =>  {
    return (
        <main>
        <div>
            <h1>{data.site?.siteMetadata?.title}</h1>
            <h2>{data.site?.siteMetadata?.description}</h2>
        </div>

            <div>
            {data.allMdx?.nodes.map(({ excerpt, frontmatter }) => (
                <div>
            <Link to={fields.slug}>
            <h2>
                {frontmatter?.title}
            ({frontmatter?.date})
            </h2>
            </Link> 
                <p>{excerpt}</p>
                </div>
            ))}
            
        </div>
        </main>
    )
}

export default PostPage

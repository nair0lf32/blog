import { Link, graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"


export const allPostsQuery = graphql`
query {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        slug
      }
      excerpt
    }
  }
}
`

const PostList = ({ data, children }: any) => {
    return(
        <Layout>
            <ul>
                {data.allMdx.nodes.map((node: any) => (
                    <li key={node.slug}>
                    <div>
                    	<div>
                        <Link to={node.slug}>
                        <h2>{node.frontmatter.title}</h2>
                        </Link>
                        </div>
                        <p>{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </div>
                    </li>
                ))}
            </ul>
        </Layout>
    )
    }

export default PostList;

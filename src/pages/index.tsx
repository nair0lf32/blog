import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";


export const allPostsQuery = graphql`
query {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`


export default function Home() {
  return (
    <Layout>
      <Link to={'/posts'}>All posts</Link>
    </Layout>
  )
}

import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, PageProps } from "gatsby"
import {
  pageStyles, headingStyles, headingAccentStyles,
  paragraphStyles } from "../components/styles"

export const query = graphql
`query postsById($id: String!) {
mdx(
    id: {eq: $id}
){
    body
    frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
    }
}
}
`
export default ({ data }: PageProps<any>) => {
const { frontmatter, body } = data.mdx
return (
    <main>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <MDXRenderer>{body}</MDXRenderer>
</main>
)
}

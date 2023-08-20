import { MDXProvider } from "@mdx-js/react"
import { graphql, Link } from "gatsby"
import React from "react"
import Layout, { headingStyle } from "../components/layout"

const shortcodes = { Link }

const PostTemplate = ({ data, children }: any) => {
    return(
        <Layout>
            <h1 style={headingStyle}>{data.mdx.frontmatter.title}</h1>
            <MDXProvider components={shortcodes}>
            {children}
            </MDXProvider>
        </Layout>
    )
    }

export const postQuery = graphql`
    query($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
            body
        }
        
    } 
    
`
export default PostTemplate

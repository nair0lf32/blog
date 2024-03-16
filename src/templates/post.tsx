import { MDXProvider } from "@mdx-js/react";
import { graphql, Link } from "gatsby";
import React from "react";
import Layout, { headingStyle} from "../components/layout";

const shortcodes = { Link };

const PostTemplate = ({ data, children }: any) => {
  return (
    <Layout>
      <h1 style={headingStyle}>{data.mdx.frontmatter.title}</h1>
      <MDXProvider components={{ ...shortcodes,}}>
        {children}
      </MDXProvider>
      <footer>
        <p><a href="https://github.com/nair0lf32">nairolf32</a> &copy; 2024 |
          {data.mdx.frontmatter.date} | <Link to="/">Go Home</Link> | <Link to="/posts">Read more</Link>
        </p>
      </footer>
    </Layout>
  );
};

export const postQuery = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default PostTemplate;

import { Link, graphql } from "gatsby";
import React from "react";
import Layout, { headingStyle } from "../components/layout";

export const allPostsQuery = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
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
`;

const PostList = ({ data, children }: any) => {
  return (
    <Layout>
      <h1 style={headingStyle}>All Blog Posts</h1>
      <ul>
        {data.allMdx.nodes.map((node: any) => (
          <li key={node.frontmatter.slug}>
            <div>
              <Link to={`/posts${node.frontmatter.slug}`}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default PostList;

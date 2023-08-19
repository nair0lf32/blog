import type { GatsbyNode } from "gatsby";

const path = require('path');

export const createPages: GatsbyNode["createPages"] = async (
    { graphql, actions, reporter }) => {
    const { createPage } = actions;
    const result = await graphql<any>(`
query {
  allMdx {
    nodes {
      body
      excerpt(pruneLength: 150)
      frontmatter {
        slug
      }
      id
      internal {
        contentFilePath
      }
    }
  }
}
        `);
    if (result.errors) {
        reporter.panicOnBuild('Failed to create posts: ', result.errors);
    }

    const posts = result.data.allMdx.nodes;

    posts.forEach((node: any) => {
        createPage({
            path: `/posts/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/post.tsx`),
            context: { id: node.id, },
        })
    })

}

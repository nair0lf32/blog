const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");


exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions

    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode })

        createNodeField({
            name: `slug`,
            node,
            value: `/posts${value}`,
        })
    }
}


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const result = await graphql
        (`query {
        allMdx { 
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)
    if (result.errors) {
        reporter.panicOnBuild("Error: Could not query createPages")
    }
    const posts = result.data.allMdx.edges
    posts.forEach(({ node }, index) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/post-template.tsx`),
            context: { id: node.id },
        })
    })
}


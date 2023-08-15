import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://blog.nairolf32.com`,
    title: `Blog`,
    description: `This is a muthafuckin' blog`,
    author: `EDEMESSI Florian`
  },

  graphqlTypegen: true,
  plugins: [

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },

  ],
}

export default config

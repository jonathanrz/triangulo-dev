require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Triângulo',
    description: 'Aprenda desenvolvimento frontend na prática',
    authorName: 'Hugo Bessa',
    ogImage: '/images/default-og-image.png',
    baseURL: process.env.BASE_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-chakra-ui`,
      options: {
        isUsingColorMode: false,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/PostLayout/index.tsx'),
          default: require.resolve('./src/components/Layout/index.tsx'),
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    `gatsby-plugin-react-helmet`,
  ],
}

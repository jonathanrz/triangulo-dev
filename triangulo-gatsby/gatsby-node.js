let { createFilePath } = require('gatsby-source-filesystem')
let path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

exports.createPages = ({ actions, graphql }) => {
  let { createPage } = actions
}

import { Box } from '@chakra-ui/core'
import React from 'react'
import { BaseLayout, BaseLayoutHeader } from '@/components/BaseLayout'
import PostContent from './PostContent'
import PostHeader from './PostHeader'
import Head from '@/components/Head'
import { graphql, useStaticQuery } from 'gatsby'

type PageContext = {
  frontmatter: object
}

type PostContainerProps = {
  frontmatter: object
}

let PostContainer: React.FC<PostContainerProps> = ({
  children,
  frontmatter,
}) => {
  return (
    <Box as='article' width='100%'>
      <PostHeader frontmatter={frontmatter} />
      <PostContent>{children}</PostContent>
    </Box>
  )
}

type PostLayoutProps = {
  pageContext: PageContext
}

let PostLayout: React.FC<PostLayoutProps> = ({ children, data }) => {
  // let {
  //   mdx: { frontmatter },
  // } = useStaticQuery(query)

  let frontmatter = {}

  return (
    <BaseLayout>
      <Head
        title={frontmatter.title}
        description={frontmatter.description}
        ogImage={frontmatter.image}
      />
      <BaseLayoutHeader />
      <PostContainer frontmatter={frontmatter}>{children}</PostContainer>
    </BaseLayout>
  )
}

export const query = graphql`
  query PostLayout($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image {
          publicURL
        }
      }
    }
  }
`

export default PostLayout

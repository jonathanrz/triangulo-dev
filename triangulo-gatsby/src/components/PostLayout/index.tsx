import { Box } from "@chakra-ui/core"
import React from "react"
import { BaseLayout, BaseLayoutHeader } from "../BaseLayout"
import PostContent from "./PostContent"
import PostHeader from "./PostHeader"

type PageContext = {
  frontmatter: object
}

type PostContainerProps = {
  pageContext: PageContext
}

let PostContainer: React.FC<PostContainerProps> = ({
  children,
  pageContext,
}) => {
  return (
    <Box as="article" width="100%">
      <PostHeader frontmatter={pageContext.frontmatter} />
      <PostContent>{children}</PostContent>
    </Box>
  )
}

type PostLayoutProps = {
  pageContext: PageContext
}

let PostLayout: React.FC<PostLayoutProps> = ({ children, pageContext }) => {
  return (
    <BaseLayout>
      <BaseLayoutHeader />
      <PostContainer pageContext={pageContext}>{children}</PostContainer>
    </BaseLayout>
  )
}

export default PostLayout

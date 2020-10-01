import { Box } from "@chakra-ui/core"
import React from "react"
import { BaseLayout, BaseLayoutHeader } from "../BaseLayout"

let PostContainer: React.FC = ({ children }) => {
  return (
    <Box width="100%" mx="auto" maxWidth="6xl">
      {children}
    </Box>
  )
}

let PostLayout: React.FC = ({ children }) => {
  return (
    <BaseLayout>
      <BaseLayoutHeader />
      <PostContainer>{children}</PostContainer>
    </BaseLayout>
  )
}

export default PostLayout

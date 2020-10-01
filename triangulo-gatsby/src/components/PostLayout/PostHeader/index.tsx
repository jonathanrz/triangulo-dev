import React from "react"
import { Box, Heading, Stack, Text } from "@chakra-ui/core"

type PostHeaderProps = {
  frontmatter: {
    title?: string
    author?: string
  }
}

let PostHeader: React.FC<PostHeaderProps> = ({ frontmatter }) => {
  return (
    <Box as="header" maxWidth="4xl" mx="auto" py="12">
      <Heading as="h1" fontSize="4xl">
        {frontmatter?.title}
      </Heading>
      <Stack isInline={true} spacing="2" alignItems="center" mt="2">
        <Box borderRadius="50%" w="30px" h="30px" bg="green.500" />
        <Text>por {frontmatter?.author || "Hugo Bessa"}</Text>
      </Stack>
    </Box>
  )
}

export default PostHeader

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Box, Heading, Image, Text } from "@chakra-ui/core"

type PostContentPProps = {
  children?: {
    props?: {
      mdxType: string
    }
  }
}

let PostContentP: React.FC<PostContentPProps> = ({ children }) => {
  let hasImageInside = children?.props?.mdxType === "img"

  if (hasImageInside) {
    return (
      <Text as="p" my="4" width="100%">
        {children}
      </Text>
    )
  }

  return (
    <Text
      as="p"
      fontSize="lg"
      px="4"
      my="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Text>
  )
}

type PostContentImgProps = {
  src: string
  alt?: string
}

let PostContentImg: React.FC<PostContentImgProps> = ({ src, alt }) => {
  return (
    <Image width="auto" maxWidth="4xl" px="4" mx="auto" src={src} alt={alt} />
  )
}

let PostContentH1: React.FC = ({ children }) => {
  return (
    <Heading
      as="h1"
      fontSize="4xl"
      px="4"
      my="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Heading>
  )
}

let PostContentH2: React.FC = ({ children }) => {
  return (
    <Heading
      as="h2"
      fontSize="3xl"
      px="4"
      my="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Heading>
  )
}

let PostContentH3: React.FC = ({ children }) => {
  return (
    <Heading
      as="h3"
      fontSize="2xl"
      px="4"
      my="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Heading>
  )
}

let PostContentUl: React.FC = ({ children }) => {
  return (
    <Box
      as="ul"
      fontSize="lg"
      pl="12"
      pr="4"
      my="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Box>
  )
}

let PostContentOl: React.FC = ({ children }) => {
  return (
    <Box
      as="ol"
      fontSize="lg"
      pl="12"
      pr="4"
      my="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Box>
  )
}

type PostContentPreProps = {
  children?: {
    props?: {
      mdxType: string
    }
  }
}

let PostContentPre: React.FC<PostContentPreProps> = ({ children }) => {
  let isChildrenCode = children?.props?.mdxType === "code"

  if (isChildrenCode) {
    return <span>code</span>
  }

  return <Box as="pre">{children}</Box>
}

let PostContentInlineCode: React.FC = ({ children }) => {
  return (
    <Box as="code" bg="gray.200" py="2px" px="2" borderRadius="md">
      {children}
    </Box>
  )
}

let mdxComponents = {
  p: PostContentP,
  img: PostContentImg,
  h1: PostContentH1,
  h2: PostContentH2,
  h3: PostContentH3,
  ul: PostContentUl,
  ol: PostContentOl,
  pre: PostContentPre,
  inlineCode: PostContentInlineCode,
}

let PostContent: React.FC = ({ children }) => {
  return (
    <MDXProvider components={mdxComponents}>
      <Box>{children}</Box>
    </MDXProvider>
  )
}

export default PostContent

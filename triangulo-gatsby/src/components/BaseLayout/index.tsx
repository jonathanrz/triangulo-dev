import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useTheme,
} from "@chakra-ui/core"
import React from "react"

export let BaseLayoutHeader: React.FC = function () {
  return (
    <Box width="100%" as="header" p="4">
      <Flex
        alignItems="center"
        width="100%"
        maxWidth="2xl"
        mx="auto"
        color="white"
      >
        <Box w="35px" h="35px" bg="white" mr="4" borderRadius="50%"></Box>
        <Box fontSize="2xl" fontWeight="bold">
          Triângulo
        </Box>
      </Flex>
    </Box>
  )
}

export let BaseLayout: React.FC = function ({ children }) {
  return (
    <Box w="100%" mx="auto" bg="white">
      {children}
    </Box>
  )
}
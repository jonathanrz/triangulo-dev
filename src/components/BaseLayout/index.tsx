import { Box, Flex, Link, Stack } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";

let Header: React.FC = function () {
  return (
    <Flex
      as="header"
      alignItems="center"
      width="100%"
      maxWidth="4xl"
      mx="auto"
      p="4"
    >
      <NextLink href="/" passHref>
        <Link _hover={{ textDecor: "none" }}>
          <Stack isInline spacing="4">
            <Box w="35px" h="35px" bg="black" borderRadius="50%"></Box>
            <Box fontSize="2xl" fontWeight="bold">
              Triângulo
            </Box>
          </Stack>
        </Link>
      </NextLink>
    </Flex>
  );
};

let BaseLayout: React.FC = function ({ children }) {
  return (
    <Box w="100%" mx="auto" bg="white">
      <Header />
      {children}
    </Box>
  );
};

export default BaseLayout;

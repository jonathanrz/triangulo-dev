import { Box, Flex, Link, Stack } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";

let TrianguloLogo = function () {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 791 791"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="395.127" cy="395.127" r="395.127" fill="black" />
      <path
        d="M474.994 570.087C448.785 615.697 435.68 638.503 418.571 646.156C403.648 652.832 386.607 652.832 371.684 646.156C354.575 638.503 341.47 615.697 315.261 570.087L204.99 378.19C178.78 332.579 165.676 309.774 167.633 291.061C169.341 274.738 177.862 259.91 191.077 250.263C206.229 239.203 232.438 239.203 284.857 239.203L505.398 239.203C557.817 239.203 584.026 239.203 599.178 250.263C612.393 259.91 620.914 274.738 622.622 291.061C624.579 309.774 611.475 332.579 585.265 378.19L474.994 570.087Z"
        fill="white"
      />
    </svg>
  );
};

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
            <Box w="35px" h="35px" bg="black" borderRadius="50%">
              <TrianguloLogo />
            </Box>
            <Box fontSize="2xl" fontWeight="bold">
              Triângulo
            </Box>
          </Stack>
        </Link>
      </NextLink>
    </Flex>
  );
};

let Footer: React.FC = function () {
  return (
    <Flex
      as="footer"
      alignItems="center"
      justifyContent="center"
      width="100%"
      maxWidth="4xl"
      mx="auto"
      p="4"
    >
      <Stack isInline spacing="4">
        <Box>
          <NextLink href="https://twitter.com/triangulo_dev" passHref>
            <Link
              _hover={{ textDecor: "none" }}
              isExternal
              color="blue.500"
              textDecor="underline"
            >
              Twitter
            </Link>
          </NextLink>
        </Box>
        <Box>
          <NextLink href="https://instagram.com/triangulo_dev" passHref>
            <Link
              _hover={{ textDecor: "none" }}
              isExternal
              color="pink.500"
              textDecor="underline"
            >
              Instagram
            </Link>
          </NextLink>
        </Box>
      </Stack>
    </Flex>
  );
};

let BaseLayout: React.FC = function ({ children }) {
  return (
    <Box w="100%" mx="auto" bg="white">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default BaseLayout;

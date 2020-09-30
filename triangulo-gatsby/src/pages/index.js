import React from "react"
import { BaseLayout, BaseLayoutHeader } from "@/components/BaseLayout"
import { Link as GatsbyLink } from "gatsby"
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/core"

function Hero() {
  return (
    <Box
      backgroundImage="linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);"
      color="white"
    >
      <BaseLayoutHeader />
      <Flex as="section" width="100%" justifyContent="center" px="4" py="32">
        <Box maxWidth="2xl">
          <Heading as="h1" fontSize="4xl" textAlign="center" mb="8">
            Desenvolvimento frontend na prática
          </Heading>

          <Text mb={4}>
            Mais conhecimento, mais prática, mais oportunidades. Aprenda a
            construir webapps avançados e domine os fundamentos que estão por
            trás das ferramentas que transformam a web na maior plataforma de
            distribuição de sofware do mundo.
          </Text>
          <Text>
            O <strong>Triângulo</strong> é uma escola de programação com o foco
            em desenvolvimento frontend. Nosso professor, Hugo Bessa, tem mais
            de 7 anos de experiência em projetos de diversos tipos e tamanhos.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

function BlogRoll() {
  return (
    <Flex as="section" width="100%" justifyContent="center" py="24" px="4">
      <Box maxWidth="2xl" width="100%">
        <Heading as="h2" fontSize="4xl" textAlign="center" mb="8">
          Blog
        </Heading>

        <Box as="article" width="100%">
          <Heading as="h3" fontSize="2xl">
            <Link as={GatsbyLink} to="/posts/tres-habitos-css-escalavel">
              3 hábitos para escrever CSS escalável
            </Link>
          </Heading>
          <Text>
            O que você precisa saber para escrever CSS que escala junto com o
            seu projeto.
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

function CSSStudyGuide() {
  return (
    <Flex as="section" py="4" px="4" width="100%" justifyContent="center">
      <Box
        width="100%"
        maxWidth="3xl"
        borderRadius="lg"
        p="6"
        backgroundImage="linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)"
        boxShadow="lg"
        // for image placement
        position="relative"
        overflow="hidden"
      >
        <Heading as="h2" fontSize="4xl" mt="1" color="white">
          Guia de Estudos CSS
        </Heading>

        <Box maxWidth="md">
          <Text mt="2" mb="8" color="white">
            Tenha em mãos um guia completo no Trello para estudar todas as
            principais ferramentas e fundamentos do CSS.
          </Text>

          <Box>
            <Button
              as="a"
              flexGrow="0"
              variantColor="cyan"
              rightIcon="arrow-forward"
            >
              Ver o Guia
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}

export default function Home() {
  return (
    <BaseLayout>
      <Box w="100%">
        <Hero />
        <BlogRoll />
        <CSSStudyGuide />
      </Box>
    </BaseLayout>
  )
}

import NextLink from "next/link";
import BaseLayout from "@/components/BaseLayout";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/core";

import { getAllPosts, Post } from "@/models/posts.model";
import { GetStaticProps, InferGetStaticPropsType } from "next";

function IntroSection() {
  return (
    <Box as="section" width="100%" px="4" py="24" mx="auto" maxWidth="2xl">
      <Heading as="h1" fontSize={["2xl", "4xl"]} textAlign="center" mb="8">
        Alcance o próximo nível em desenvolvimento front-end
      </Heading>

      <Text mb={4}>
        Mais conhecimento, mais prática, mais oportunidades. Aprenda a construir
        webapps avançados, com conteúdo objetivo e direto das trincheiras.
      </Text>
      <Text mb={4}>
        Domine os fundamentos que estão por trás das ferramentas que transformam
        a web na maior plataforma de distribuição de sofware.
      </Text>
      <Text>
        O <strong>Triângulo</strong> é uma escola de programação com o foco em
        desenvolvimento frontend. Nosso professor, Hugo Bessa, tem mais de 7
        anos de experiência em projetos de diversos tipos e tamanhos.
      </Text>
    </Box>
  );
}

function BlogRoll({ posts }: { posts: Post[] }) {
  return (
    <Box as="section" width="100%" py="24" px="4" mx="auto" maxWidth="2xl">
      <Heading as="h2" fontSize="4xl" textAlign="center" mb="8">
        Blog
      </Heading>

      {posts.map((post) => (
        <Box key={post.slug} as="article" width="100%" mb="4">
          <Heading as="h3" fontSize="2xl">
            <NextLink href={`/posts/${post.slug}`} passHref>
              <Link>{post.frontmatter.title}</Link>
            </NextLink>
          </Heading>
          <Text>{post.frontmatter.description}</Text>
        </Box>
      ))}
    </Box>
  );
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
            <NextLink href="/guia-de-estudos-css" passHref>
              <Button as="a" variantColor="cyan" rightIcon="arrow-forward">
                Ver o Guia
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <BaseLayout>
      <Box w="100%">
        <IntroSection />
        <BlogRoll posts={posts} />
        <CSSStudyGuide />
      </Box>
    </BaseLayout>
  );
}

export let getStaticProps: GetStaticProps = async function () {
  let posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

import React from "react";
import fs from "fs";
import path from "path";
import BaseLayout from "@/components/BaseLayout";
import ReactMarkdown from "react-markdown/with-html";
import NextLink from "next/link";

import { Box, Heading, Image, Link, Stack, Text } from "@chakra-ui/core";
import SEO from "@/components/SEO";
import { getPost } from "@/models/posts.model";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type PostFrontmatter = {
  title?: string;
  authorName?: string;
  authorImage?: string;
  description?: string;
  ogImage?: string;
  date?: string;
};

type PostHeaderProps = {
  frontmatter: PostFrontmatter;
};

let PostHeader: React.FC<PostHeaderProps> = ({ frontmatter }) => {
  return (
    <Box as="header" maxWidth="4xl" mx="auto" py="12" px="4">
      <Heading as="h1" fontSize="4xl">
        {frontmatter.title}
      </Heading>
      <Stack isInline={true} spacing="2" alignItems="center" mt="2">
        {frontmatter.authorImage ? (
          <Image
            src={frontmatter.authorImage}
            borderRadius="50%"
            w="30px"
            h="30px"
            bg="green.500"
          />
        ) : null}
        {frontmatter.authorName ? (
          <Text>por {frontmatter.authorName || "Hugo Bessa"}</Text>
        ) : null}
      </Stack>
    </Box>
  );
};

let PostContentP: React.FC = ({ children }) => {
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
  );
};

type PostContentHeadingProps = {
  level: Number;
};

let PostContentHeading: React.FC<PostContentHeadingProps> = ({
  children,
  level,
}) => {
  let levelConfig: {
    [index: string]: { fontSize: string; tag: "h1" | "h2" | "h3"; mt: string };
  } = {
    "1": { fontSize: "4xl", tag: "h1", mt: "16" },
    "2": { fontSize: "3xl", tag: "h2", mt: "16" },
    "3": { fontSize: "2xl", tag: "h3", mt: "8" },
  };

  return (
    <Heading
      as={levelConfig[level.toString()]?.tag || "h3"}
      fontSize={levelConfig[level.toString()]?.fontSize || "2xl"}
      px="4"
      mt={levelConfig[level.toString()]?.mt || "4"}
      mb="4"
      mx="auto"
      width="100%"
      maxWidth="2xl"
    >
      {children}
    </Heading>
  );
};

let PostContentList: React.FC = ({ children }) => {
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
  );
};

let PostContentCode: React.FC = ({ children }) => {
  return <Box as="pre">{children}</Box>;
};

let PostContentInlineCode: React.FC = ({ children }) => {
  return (
    <Box as="code" bg="gray.200" py="2px" px="2" borderRadius="md">
      {children}
    </Box>
  );
};

type PostContentLinkProps = {
  href?: string;
};

let PostContentLink: React.FC<PostContentLinkProps> = ({ children, href }) => {
  let isExternal = href?.startsWith("https://") || false;

  return (
    <NextLink href={href || ""} passHref>
      <Link isExternal={isExternal} color="blue.500" textDecoration="underline">
        {children}
      </Link>
    </NextLink>
  );
};

let markdownComponents = {
  paragraph: PostContentP,
  heading: PostContentHeading,
  list: PostContentList,
  code: PostContentCode,
  link: PostContentLink,
  linkReference: PostContentLink,
  inlineCode: PostContentInlineCode,
};

type PostContentProps = {
  content: string;
};

let PostContent: React.FC<PostContentProps> = ({ content }) => {
  return (
    <ReactMarkdown
      escapeHtml={false}
      renderers={markdownComponents}
      source={content}
    />
  );
};

export default function Post({
  content,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        ogImage={frontmatter.ogImage}
      />
      <BaseLayout>
        <article>
          <PostHeader frontmatter={frontmatter} />
          <PostContent content={content} />
        </article>
      </BaseLayout>
    </>
  );
}

export async function getStaticPaths() {
  let files = fs.readdirSync(path.join("content", "posts"));

  let paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export let getStaticProps: GetStaticProps = async function (context) {
  let slug = context.params?.slug?.toString();

  if (slug) {
    let post = await getPost(slug);

    return {
      props: post,
    };
  }

  throw new Error(`No slug param passed`);
};

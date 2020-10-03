import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BaseLayout from "@/components/BaseLayout";
import ReactMarkdown from "react-markdown/with-html";

import { Box, Heading, Stack, Text } from "@chakra-ui/core";
import SEO from "@/components/SEO";

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
        <Box borderRadius="50%" w="30px" h="30px" bg="green.500" />
        <Text>por {frontmatter.authorName || "Hugo Bessa"}</Text>
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
    [index: string]: { fontSize: string; tag: "h1" | "h2" | "h3" };
  } = {
    "1": { fontSize: "4xl", tag: "h1" },
    "2": { fontSize: "3xl", tag: "h2" },
    "3": { fontSize: "2xl", tag: "h3" },
  };

  return (
    <Heading
      as={levelConfig[level.toString()]?.tag || "h3"}
      fontSize={levelConfig[level.toString()]?.fontSize || "2xl"}
      px="4"
      my="4"
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

let markdownComponents = {
  paragraph: PostContentP,
  heading: PostContentHeading,
  list: PostContentList,
  code: PostContentCode,
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

type PostProps = {
  content: string;
  frontmatter: PostFrontmatter;
};

export default function Post({ content, frontmatter }: PostProps) {
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

export async function getStaticProps({ params: { slug } }) {
  let markdownWithMetadata = fs
    .readFileSync(path.join("content", "posts", slug, "index.md"))
    .toString();

  let { data: frontmatter, content } = matter(markdownWithMetadata);

  return {
    props: {
      content,
      frontmatter,
    },
  };
}

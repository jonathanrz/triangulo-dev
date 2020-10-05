import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import site from "@/config/site";

type SEOProps = {
  title?: string;
  description?: string;
  ogImage?: string;
  authorName?: string;
};

function withBaseURL(path: string): string {
  return `${site.meta.baseURL}${path}`;
}

let SEO: React.FC<SEOProps> = ({ title, description, ogImage, authorName }) => {
  let router = useRouter();

  let content = {
    title: title || site.meta.title,
    description: description || site.meta.description,
    ogImage: ogImage || site.meta.ogImage,
    authorName: authorName || site.meta.authorName,
    url: withBaseURL(router.asPath),
  };

  return (
    <Head>
      <title>{content.title}</title>

      <link rel="canonical" href={content.url} />
      <link rel="og:url" href={content.url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@triangulo_dev" />

      <meta property="og:title" content={content.title} />
      <meta property="twitter:title" content={content.title} />

      <meta name="description" content={content.description} />
      <meta property="og:description" content={content.description} />
      <meta name="twitter:description" content={content.description} />

      <meta property="og:image" content={withBaseURL(content.ogImage)} />
      <meta name="twitter:image" content={withBaseURL(content.ogImage)} />

      <meta name="author" content={content.authorName} />
    </Head>
  );
};

export default SEO;

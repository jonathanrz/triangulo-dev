import { graphql, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import React from 'react'
import { Helmet } from 'react-helmet'

type HeadProps = {
  title?: string
  description?: string
  ogImage?: string
  authorName?: string
}

let Head: React.FC<HeadProps> = ({
  title,
  description,
  ogImage,
  authorName,
}) => {
  let { pathname } = useLocation()
  let {
    site: { siteMetadata },
  } = useStaticQuery(headQuery)

  let content = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    ogImage: ogImage || siteMetadata.ogImage,
    authorName: authorName || siteMetadata.authorName,
    url: `${siteMetadata.baseURL}${pathname}`,
  }

  return (
    <Helmet>
      <title>{content.title}</title>

      <link rel='canonical' href={content.url} />

      <meta property='og:title' content={content.title} />
      <meta property='twitter:title' content={content.title} />

      <meta name='description' content={content.description} />
      <meta property='og:description' content={content.description} />
      <meta name='twitter:description' content={content.description} />

      <meta property='og:image' content={content.ogImage} />
      <meta name='twitter:image' content={content.ogImage} />

      <meta name='author' content={content.authorName} />
    </Helmet>
  )
}

const headQuery = graphql`
  query Head {
    site {
      siteMetadata {
        title
        description
        authorName
        ogImage
        baseURL
      }
    }
  }
`

export default Head

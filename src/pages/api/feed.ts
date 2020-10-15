import { getAllPosts } from "@/models/posts.model";
import { orderBy } from "lodash/fp";
import site from "@/config/site";
import RSS from "rss";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let posts = await getAllPosts();

  if (posts) {
    let sortedPosts = orderBy("frontmatter.date", "desc", posts);
    let feed = new RSS({
      title: site.meta.title,
      site_url: site.meta.baseURL,
      feed_url: site.meta.baseURL + "/feed.xml",
    });

    sortedPosts.forEach((post) => {
      feed.item({
        title: post.frontmatter.title || "",
        description: post.frontmatter.description || "",
        date: post.frontmatter.date || new Date(),
        guid: post.slug,
        url: site.meta.baseURL + "/posts/" + post.slug,
      });
    });

    let rssFeed = feed.xml({ indent: true });

    res.statusCode = 200;
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.setHeader("Content-Type", "text/xml; charset=utf-8");
    res.send(rssFeed);
  }
}

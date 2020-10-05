import * as jetpack from "fs-jetpack";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  frontmatter: {
    title?: string;
    description?: string;
    ogImage?: string;
    date?: string;
    authorName?: string;
    authorImage?: string;
  };
  content: string;
};

export async function getPost(slug: string): Promise<Post> {
  let markdownWithMetadata = await jetpack.readAsync(
    path.join("content", "posts", slug, "index.md")
  );

  if (markdownWithMetadata) {
    let { data: frontmatter, content } = matter(markdownWithMetadata);

    return {
      slug,
      content,
      frontmatter,
    };
  }

  throw new Error(`Post ${slug} Not Found`);
}

export async function getAllPosts(): Promise<Post[]> {
  let files: string[] = jetpack.find(path.join("content", "posts"), {
    directories: true,
    files: false,
  });

  let posts = files.map(async (filename: string) => {
    return await getPost(filename);
  });

  return await Promise.all(posts);
}

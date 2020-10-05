import fs from "fs";
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
  let markdownWithMetadata = fs.readFileSync(
    path.join(process.cwd(), "content", "posts", slug, "index.md")
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
  let files: string[] = fs.readdirSync(
    path.join(process.cwd(), "content", "posts")
  );

  let posts = files.map(async (filename: string) => {
    return await getPost(filename);
  });

  console.log(await Promise.all(posts));

  return await Promise.all(posts);
}

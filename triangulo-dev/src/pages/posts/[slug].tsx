import jetpack from "fs-jetpack";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import path from "path";

function Post({ postContent }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <pre>{postContent}</pre>
    </div>
  );
}

export let getStaticProps: GetStaticProps = async function (context) {
  let slug = context.params?.slug;

  if (slug) {
    let postsDirectory = path.join(process.cwd(), "content", "posts");
    let filePath = path.join(postsDirectory, `${slug}/index.md`);

    let postContent = await jetpack.readAsync(filePath);
    return { props: { postContent } };
  }

  return { props: {} };
};

export let getStaticPaths: GetStaticPaths = async function () {
  return {
    paths: [{ params: { slug: "tres-habitos-css-escalavel" } }],
    fallback: false,
  };
};

export default Post;

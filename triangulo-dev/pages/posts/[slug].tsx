import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <pre>{post}</pre>
    </div>
  );
}

export let getStaticProps: GetStaticProps = async function (context) {
  let slug = context.params?.slug;

  if (slug) {
    let post = await import(`../../content/posts/${slug}/index.md`);
    return { props: { post } };
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

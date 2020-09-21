import { GetStaticProps, InferGetStaticPropsType } from "next";

function Post({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // let post = await import(`@content/posts/${slug}.md`);
  return { props: { post: { title: "hey", slug: context?.params?.slug } } };
};

export default Post;

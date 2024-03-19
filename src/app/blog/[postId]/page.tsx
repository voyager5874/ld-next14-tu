import s from "./page.module.scss";
import { Suspense } from "react";
import { PostAuthor } from "@/components/post-author/post-author";
import Image from "next/Image";
import { NextPage } from "next";
import { Post } from "@/app/blog/page";

// const post = {
//   image:
//     "https://images.unsplash.com/photo-1597066906248-c8d6606c6d70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   userId: "123",
//   title: "Pexels",
//   createdAt: new Date(),
//   description: "Pexels from a Tortoise walking on dirt.",
// };

const getPost = async (postId: string): Promise<Post | void> => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
const SinglePostPage: NextPage<{ params: { postId: string } }> = async ({
  params,
}) => {
  console.log(params.postId);
  const post = await getPost(params.postId);
  if (!post) {
    return <div>error</div>;
  }
  post.image =
    "https://images.unsplash.com/photo-1597066906248-c8d6606c6d70?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  post.desc =
    "At the moment, we’re focusing on providing the best user experience for Python. We will start working on coverage for other languages in late 2023 and early 2024";
  post.createdAt = new Date();

  return (
    <div className={s.container}>
      {post?.image && (
        <div className={s.imgContainer}>
          <Image src={post.image} alt="" fill className={s.img} />
        </div>
      )}
      <div className={s.textContainer}>
        <h1 className={s.title}>{post.title}</h1>
        <div className={s.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostAuthor userId={post.userId} />
            </Suspense>
          )}
          <div className={s.detailText}>
            <span className={s.detailTitle}>Published</span>
            <span className={s.detailValue}>
              {post?.createdAt && post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={s.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;

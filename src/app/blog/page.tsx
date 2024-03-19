import PostCard from "@/components/post-card/post-card";
import s from "./page.module.scss";

// export type Post = {
//   title: string;
//   id: string;
//   image?: string;
//   link: string;
//   createdAt: Date;
//   description: string;
//   body: string;
// };
// const posts: Post[] = [
//   {
//     id: "12313",
//     body: "asdada",
//     createdAt: new Date(),
//     description: "sdfsfdds",
//     image:
//       "https://images.pexels.com/photos/20624930/pexels-photo-20624930/free-photo-of-a-close-up-of-a-tortoise-walking-on-dirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     link: "",
//     title: "sdsfsf",
//   },
//   {
//     id: "123ds13",
//     body: "asdada",
//     createdAt: new Date(),
//     description: "sdfsfdds",
//     image:
//       "https://images.pexels.com/photos/20624930/pexels-photo-20624930/free-photo-of-a-close-up-of-a-tortoise-walking-on-dirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     link: "",
//     title: "sdsfsf",
//   },
// ];

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  image?: string;
  createdAt?: Date;
  desc?: string;
};
const getPosts = async (): Promise<Post[] | void> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
const BlogPostsPage = async () => {
  const posts = await getPosts();
  return (
    <div>
      <div className={s.container}>
        {posts?.length &&
          posts.map((post) => (
            <div className={s.post} key={post.id}>
              <PostCard {...post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;

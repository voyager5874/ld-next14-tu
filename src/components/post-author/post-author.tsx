import s from "./post-author.module.scss";
import Image from "next/Image";

type PostAuthorProps = {
  userId: string | number;
};

export type User = {
  avatar?: string;
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

const extra = {
  avatar:
    "https://plus.unsplash.com/premium_photo-1710294628449-a5d79727eab9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const getUser = async (userId: number | string): Promise<User | void> => {
  try {
    const userData = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + userId,
    );
    return userData.json();
  } catch (e) {
    console.log(e);
  }
};

export const PostAuthor = async ({ userId, ...restProps }: PostAuthorProps) => {
  const user = await getUser(userId);
  if (!user) {
    return <div>error getting user</div>;
  }
  user.avatar = extra.avatar;
  return (
    <>
      <div className={s.container}>
        <Image
          className={s.avatar}
          src={user?.avatar ? user.avatar : "/no-avatar.png"}
          alt=""
          width={50}
          height={50}
        />
        <div className={s.texts}>
          <span className={s.title}>Author</span>
          <span className={s.username}>{user.name}</span>
        </div>
      </div>
    </>
  );
};

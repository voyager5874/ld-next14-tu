import Image from "next/Image";
import Link from "next/link";
import s from "./post-card.module.scss";
import { Post } from "@/app/blog/page";

const PostCard = ({
  image,
  title,
  createdAt,
  desc,
  body,
  id,
  ...restProps
}: Post) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.top}>
          {image && (
            <div className={s.imgContainer}>
              <Image src={image} alt="" fill className={s.img} />
            </div>
          )}
          <span className={s.date}>{createdAt?.toString().slice(4, 16)}</span>
        </div>
        <div className={s.bottom}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.desc}>{body}</p>
          <Link className={s.link} href={`/blog/${id}`}>
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostCard;

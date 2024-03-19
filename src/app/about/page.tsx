import s from "./page.module.scss";
import Image from "next/image";

console.log("About Page");
const Page = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <h2 className={s.subtitle}>About Agency</h2>
        <h1 className={s.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={s.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={s.boxes}>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className={s.box}>
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={s.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={s.img} />
      </div>
    </div>
  );
};

export default Page;

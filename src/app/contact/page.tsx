import Image from "next/Image";
import s from "./contact-page.module.scss";
export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const Page = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.imgContainer}>
          <Image src="/contact.png" alt="" fill className={s.img} />
        </div>
        <div className={s.formContainer}>
          <form action="" className={s.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;

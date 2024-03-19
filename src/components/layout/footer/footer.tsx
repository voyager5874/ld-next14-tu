import s from "./footer.module.scss";
export const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>lamadev</div>
      <div className={s.text}>
        Lama creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

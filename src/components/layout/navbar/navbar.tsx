"use client";

import s from "./navbar.module.scss";
import { NavLink } from "./nav-link";
import { links } from "./const";
import { useState } from "react";
import Image from "next/image";

type NavbarProps = {};

const session = true;
const isAdmin = true;

export const Navbar = ({ ...restProps }: NavbarProps) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const changeMenuState = () => {
    setBurgerOpen((prev) => !prev);
  };

  return (
    <div className={s.container}>
      <div>Logo</div>
      <div className={s.linksContainer}>
        {links.map((item) => (
          <NavLink key={item.title} href={item.path}>
            {item.title}
          </NavLink>
        ))}
        {isAdmin && <NavLink href={"/admin"}>Admin</NavLink>}
        {session && <button className={s.logout}>Logout</button>}
        {!session && <NavLink href={"/login"}>Login</NavLink>}
      </div>
      <Image
        className={s.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={changeMenuState}
      />
      {burgerOpen && (
        <div className={s.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} href={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

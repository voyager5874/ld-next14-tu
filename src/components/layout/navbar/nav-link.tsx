"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import s from "./nav-link.module.scss";
import { ComponentPropsWithoutRef } from "react";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link>;
export const NavLink = ({ href, className, ...restProps }: NavLinkProps) => {
  const pathName = usePathname();
  const active = pathName === href;
  return (
    <>
      <Link
        {...restProps}
        className={clsx(s.link, className, active && s.active)}
        href={href}
      />
    </>
  );
};

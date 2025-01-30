"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
import { IoLogoReact } from "react-icons/io5";

interface Props {
  title: string;
  path: string;
  icon: JSX.Element
  subTitle?: string
}

export const ActiveLink = ({ path, title, icon, subTitle }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path} className={`${style.link} ${pathName === path && style["active-link"]}`}>
      <div className="mr-2">
      {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold leading-5">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};

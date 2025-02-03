import React from "react";
import { ActiveLink } from "./active-link/ActiveLink";
import { IoBook, IoFilm, IoFlame, IoFlask, IoStopwatch } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";

const navItems = [
  {
    title: "Characters",
    path: "/characters",
    icon: <IoIosPerson size={30} />,
    subTitle: "Magos y Creaturas de la saga",
  },
  {
    title: "Spells",
    path: "/spells",
    icon: <IoFlame size={30} />,
    subTitle: "Todos los conjuros ",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "350px" }}
      className=" bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <a href="/">
            Harry Potter - <span className="text-purple-600">db</span>
          </a>
        </h1>
        <p className="text-slate-500 text-sm">
          Get all data from Harry Potter API
        </p>
      </div>

      <div className="mt-20"></div>

      <div id="nav" className="w-full px-6">

        {navItems.map((navItem) => (
          <ActiveLink
            key={navItem.path}
            path={navItem.path}
            title={navItem.title}
            icon={navItem.icon}
            subTitle={navItem.subTitle}
          />
        ))}
      </div>
    </div>
  );
};

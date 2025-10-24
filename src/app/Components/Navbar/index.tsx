"use client";

import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import style from "./style.module.css";
import { NavItem } from "../NavItem";
import { useState } from "react";

type NavbarProps = {
  linkSub?: "Home" | "Favorits";
};

export function Navbar({ linkSub }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<boolean>();
  return (
    <div className={style.navbar}>
      <a href="./">
        <Image
          src="github-logo.svg"
          height={32}
          width={32}
          alt="Logo do sistema"
        />
      </a>
      <div className={`${style.navList} ${openMenu ? style.open : ""}`}>
        <button
          style={{ marginLeft: "auto" }}
          className={`${style.btmMobile}`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <MdClose />
        </button>
        <NavItem name="Home" href="./" subed={linkSub === "Home" && true} />
        <NavItem
          name="Favoritos"
          href="./favorites"
          subed={linkSub === "Favorits" && true}
        />
      </div>
      <button
        className={style.btmMobile}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <FaBars />
      </button>
    </div>
  );
}

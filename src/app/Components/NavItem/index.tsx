import Link from "next/link";
import style from "./style.module.css";

type NavItemProps = {
  href: string;
  subed: boolean;
  name: string;
};

export function NavItem({ href, subed = false, name }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`
            ${style.linkMenu}
            ${subed && style.subed}
          `}
    >
      {name}
    </Link>
  );
}

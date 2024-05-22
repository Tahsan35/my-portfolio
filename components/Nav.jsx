import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
  { path: "/about", name: "about" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="undderline"
                className={`${underlineStyles}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;

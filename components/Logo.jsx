import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative hover:text-primary transition:-all font-thin text-xl"
    >
      Tahsan Shakil
    </Link>
  );
};

export default Logo;

import Link from "next/link";

const data = [
  { href: "/", title: "Home" },
  { href: "/play", title: "Play" },
];

export default function NavLinks() {
  return data.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      title={link.title}
    >
      {link.title}
    </Link>
  ));
}

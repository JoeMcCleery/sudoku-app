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
      className="bg-sky-800 p-2 rounded"
    >
      {link.title}
    </Link>
  ));
}

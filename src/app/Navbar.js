import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>Suhani</h2>

      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
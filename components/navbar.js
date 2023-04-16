import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [navCollapsed, setNavCollapsed] = useState(true);
  return (
    <nav
      className={`px-4 ${
        !navCollapsed && "border-b"
      } lg:border-none lg:px-36 2xl:px-80 fixed w-screen top-0 bg-white`}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={10}
            height={10}
            className="h-16 w-16"
            alt=""
          />
        </Link>

        {/* menu icon */}
        {navCollapsed && (
          <Image
            className="h-10 w-10 lg:hidden"
            onClick={() => setNavCollapsed(false)}
            alt=""
            width={10}
            height={10}
            src="/menu.svg"
          />
        )}
        {/* close menu icon */}
        {!navCollapsed && (
          <Image
            className="h-10 w-10 lg:hidden"
            onClick={() => setNavCollapsed(true)}
            src="/close.svg"
            alt=""
            height={10}
            width={10}
          />
        )}
        {/* desktop menu */}
        <div className="hidden text-xl  lg:flex">
          <Link href="/" className="mx-1 linkButton">
            About
          </Link>
          <Link href="/projects" className="mx-1 linkButton">
            Projects
          </Link>
          <Link href="/blog" className="mx-1 linkButton">
            Blog
          </Link>
          <Link href="connect" className="mx-1 linkButton">
            Connect
          </Link>
        </div>
      </div>
      {/* mobile menu */}
      {!navCollapsed && (
        <div className="flex flex-col items-end text-2xl lg:hidden">
          <Link href="/" onClick={() => setNavCollapsed(true)}>
            About
          </Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="connect">Connect</Link>
        </div>
      )}
    </nav>
  );
}

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export default function Navbar() {
  const [navCollapsed, setNavCollapsed] = useState(true);
  return (
    <nav
      className={`px-4 ${
        navCollapsed ? "shadow-sm" : "shadow-2xl"
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
            priority
          />
        </Link>

        {/* menu icon */}
        {navCollapsed && (
          <IoMenuOutline
            className="h-10 w-10 lg:hidden"
            onClick={() => setNavCollapsed(false)}
            alt=""
          />
        )}
        {/* close menu icon */}
        {!navCollapsed && (
          <IoCloseOutline
            className="h-10 w-10 lg:hidden"
            onClick={() => setNavCollapsed(true)}
            alt=""
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
        </div>
      </div>
      {/* mobile menu */}
      {!navCollapsed && (
        <div className="flex flex-col items-end text-2xl lg:hidden">
          <Link href="/" onClick={() => setNavCollapsed(true)}>
            About
          </Link>
          <Link href="/blog" onClick={() => setNavCollapsed(true)}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}

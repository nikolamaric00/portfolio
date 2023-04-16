import { useState } from "react";
import Link from "next/link";

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
          <svg viewBox="0 0 78 33" fill="none" className="h-16 w-16">
            <path
              d="M41.2958 0V13.022L43.3473 15.8762L45.2203 13.022V0H41.2958Z"
              fill="#867555"
            />
            <path
              d="M41.2958 0V13.022L43.3473 15.8762L45.2203 13.022V0H41.2958Z"
              fill="#867555"
            />
            <path
              d="M12.7544 10.0787V5.97586L0 14.6275V17.214L12.7544 28.8982V24.3494L4.01364 16.0545L12.7544 10.0787Z"
              fill="#262935"
            />
            <path
              d="M12.7544 10.0787V5.97586L0 14.6275V17.214L12.7544 28.8982V24.3494L4.01364 16.0545L12.7544 10.0787Z"
              fill="#262935"
            />
            <path
              d="M65.0209 10.0787V5.97586L77.7753 14.6275V17.214L65.0209 28.8982V24.3494L73.7617 16.0545L65.0209 10.0787Z"
              fill="#867555"
            />
            <path
              d="M65.0209 10.0787V5.97586L77.7753 14.6275V17.214L65.0209 28.8982V24.3494L73.7617 16.0545L65.0209 10.0787Z"
              fill="#867555"
            />
            <path
              d="M20.8709 0H17.3924V32.5419H21.406V6.86778L41.831 32.555H45.2203V23.6359H41.2958V25.4197L20.8709 0Z"
              fill="#867555"
            />
            <path
              d="M20.8709 0H17.3924V32.5419H21.406V6.86778L41.831 32.555H45.2203V23.6359H41.2958V25.4197L20.8709 0Z"
              fill="#867555"
            />
            <path
              d="M32.3767 32.5551H28.2739V16.9465L32.3767 21.7628V32.5551Z"
              fill="#262935"
            />
            <path
              d="M43.2581 17.4816L32.1983 0.891907H28.2738L28.363 7.67049L32.2875 12.4869V8.20564L41.9202 22.2088H44.5959L54.2558 8.20564V32.555H58.3315V0.891907H54.4962L43.2581 17.4816Z"
              fill="#262935"
            />
            <path
              d="M43.2581 17.4816L32.1983 0.891907H28.2738L28.363 7.67049L32.2875 12.4869V8.20564L41.9202 22.2088H44.5959L54.2558 8.20564V32.555H58.3315V0.891907H54.4962L43.2581 17.4816Z"
              fill="#262935"
            />
          </svg>
        </Link>

        {/* menu icon */}
        {navCollapsed && (
          <svg
            viewBox="0 0 30 30"
            className="h-10 w-10 lg:hidden"
            onClick={() => setNavCollapsed(false)}
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        )}
        {/* close menu icon */}
        {!navCollapsed && (
          <svg
            viewBox="0 0 50 50"
            className="h-10 w-10 lg:hidden"
            onClick={() => setNavCollapsed(true)}
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
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

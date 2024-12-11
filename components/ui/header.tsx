import Link from "next/link";
import Logo from "./logo";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <header className="fixed top-0 left-0 z-30 w-full md:top-2">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative flex h-16 items-center justify-between gap-3 rounded-b-2xl bg-white/90 px-4 py-2 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">

            {/* Site branding */}
            <div className="flex items-center">
              <Logo />
              <h1 className="ml-3 text-lg font-semibold text-gray-800 md:text-xl">Contractual</h1>
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden text-gray-800 focus:outline-none"
                aria-label="Toggle menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Navigation links */}
            <ul
                className={`fixed inset-0 z-20 flex flex-col items-center justify-center bg-white bg-opacity-90 p-6 space-y-6 md:static md:flex md:flex-row md:space-y-0 md:space-x-6 md:p-0 md:bg-transparent ${
                    menuOpen ? "block" : "hidden md:flex"
                }`}
            >
              <li>
                <Link
                    href="/signin"
                    className="btn-sm w-full bg-white text-gray-800 shadow hover:bg-gray-50 md:w-auto"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                    href="/signup"
                    className="btn-sm w-full bg-gray-800 text-gray-200 shadow hover:bg-gray-900 md:w-auto"
                >
                  Register
                </Link>
              </li>

              <li>
                <Link
                    href="mailto:contact@contractual.ca"
                    className="btn-sm w-full text-gray-800 hover:underline md:w-auto"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
  );
}

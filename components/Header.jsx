'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { RiMenu4Line, RiCloseCircleLine } from 'react-icons/ri';
import { navLinks } from '@/constatns';

const Header = () => {
  const currentRoute = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="px-6 w-full py-5 fixed top-0 z-20 bg-black/40">
      <nav className="flex flex-row justify-between items-center">
        <Link
          href="/"
          className="flex gap-2 items-center"
          onClick={() => setShowMenu(false)}
        >
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="max-sm:hidden font-semibold text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-amber-100 to-yellow-400 bg-clip-text text-transparent">
            Volodymyr Pivtoranis
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-6 md:gap-10 lg:gap-16">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`font-semibold text-xl inline-block text-primary transition-all duration-500 hover:text-secondary hover:scale-110 ${
                currentRoute === '/' + link.id ? 'text-secondary' : ''
              }`}
            >
              <Link href={link.id}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {showMenu ? (
            <RiCloseCircleLine
              className="text-primary text-3xl cursor-pointer"
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <RiMenu4Line
              className="text-secondary text-3xl cursor-pointer"
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
        <div
          className={`${
            !showMenu ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 w-full h-screen z-10 rounded-xl ${
            showMenu ? 'animate-fade-in' : 'animate-fade-out'
          }`}
        >
          <ul className="list-none flex flex-col gap-10 ">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`mt-4 font-semibold text-xl inline-block text-primary transition-all duration-500 hover:text-secondary hover:scale-110 ${
                  currentRoute === '/' + link.id ? 'text-secondary' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

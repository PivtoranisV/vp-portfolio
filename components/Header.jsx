'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/constatns';

const Header = () => {
  const currentRoute = usePathname();
  console.log(currentRoute);
  return (
    <header className="px-6 w-full py-5 fixed top-0 z-20 bg-black/40">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/logo.jpeg"
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="max-sm:hidden font-semibold text-3xl bg-gradient-to-r from-blue-500 via-amber-100 to-yellow-400 bg-clip-text text-transparent">
            Volodymyr Pivtoranis
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 lg:gap-16">
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
      </nav>
    </header>
  );
};

export default Header;

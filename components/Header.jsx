import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
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
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-primary font-semibold text-xl hover:text-secondary">
            <Link href="/about">About Me</Link>
          </li>
          <li className="text-primary font-semibold text-xl hover:text-secondary">
            <Link href="/work">Work</Link>
          </li>
          <li className="text-primary font-semibold text-xl hover:text-secondary">
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

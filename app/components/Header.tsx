import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <Link href="/">
        <Image src="/logo.png" alt="LiveAssist Logo" width={150} height={40} className="cursor-pointer object-contain" />
      </Link>
      <nav className="flex gap-6 text-sm font-medium text-gray-800">
        <Link href="/demo" className="hover:text-purple-600">Demo</Link>
        <Link href="/register" className="hover:text-purple-600">Rejestracja</Link>
        <Link href="/dashboard" className="hover:text-purple-600">Panel</Link>
      </nav>
    </header>
  );
}
import Image from 'next/image';
import logo from '/public/logo.png';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black to-purple-950">
      <Image src={logo} alt="LiveAssist logo" width={160} height={160} className="mb-6 rounded-lg shadow-lg" />
      <h1 className="text-4xl font-bold text-white mb-2">Witaj w <span className="text-purple-400">LiveAssist</span></h1>
      <p className="text-white text-lg">Twoje centrum zarządzania AI dla klientów</p>
    </main>
  );
}
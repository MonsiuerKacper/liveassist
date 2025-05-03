import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold">🤖 LiveAssist</h1>
          <nav className="mt-4 sm:mt-0">
            <Link href="/demo" className="mx-4 hover:underline">Demo</Link>
            <Link href="/register" className="mx-4 hover:underline">Rejestracja</Link>
            <Link href="/dashboard" className="mx-4 hover:underline">Panel</Link>
          </nav>
        </div>
      </header>
      <div className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Twój własny inteligentny bot AI</h2>
        <p className="text-lg text-gray-700 mb-6">Zautomatyzuj obsługę klienta i zwiększ sprzedaż dzięki LiveAssist</p>
        <Link href="/demo" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">Przetestuj demo</Link>
      </div>
    </main>
  );
}
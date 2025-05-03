export default function Register() {
  return (
    <main className="max-w-xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">Zarejestruj się</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Imię i nazwisko" className="w-full border p-3 rounded" />
        <input type="email" placeholder="E-mail" className="w-full border p-3 rounded" />
        <input type="password" placeholder="Hasło" className="w-full border p-3 rounded" />
        <button type="submit" className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700">Załóż konto</button>
      </form>
    </main>
  );
}
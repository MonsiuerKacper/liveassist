export default function Dashboard() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">👋 Witaj w panelu klienta, Kacper!</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">🎨 Personalizacja bota</h2>
        <div className="flex gap-4 items-center">
          <label className="text-sm font-medium">Kolor główny:</label>
          <select className="border rounded p-2">
            <option value="purple">Fioletowy</option>
            <option value="blue">Niebieski</option>
            <option value="green">Zielony</option>
            <option value="yellow">Żółty</option>
          </select>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📦 Plan</h2>
        <p className="text-gray-700">Aktualny plan: <strong>Free</strong></p>
        <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Zmień plan
        </button>
      </section>

      <section>
        <button className="bg-gray-200 hover:bg-gray-300 text-sm px-4 py-2 rounded">
          Wyloguj się
        </button>
      </section>
    </main>
  );
}
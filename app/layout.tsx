import './globals.css';

export const metadata = {
  title: 'LiveAssist',
  description: 'Sprzedawaj więcej dzięki inteligentnemu botowi AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
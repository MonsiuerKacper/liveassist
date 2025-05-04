import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'LiveAssist',
  description: 'Sprzedawaj więcej dzięki inteligentnemu botowi AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
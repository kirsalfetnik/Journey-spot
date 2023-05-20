import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
  subsets: ["latin"],
})

export const metadata = {
  title: 'Journey Spot',
  description: 'Find your perfect journey',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

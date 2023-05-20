import './globals.css'
import { Nunito } from 'next/font/google'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'

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
      <body className={nunito.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}

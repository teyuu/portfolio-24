
import { ThemeProvider } from './components/ThemeProvider'
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Matias Tellini',
  description: 'Desarrollador Full Stack. Javascript, React, Typescript, Node, Express, SQL',
  icons: {
    icon: '/images/mt.png', // /public path
  },
}

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '700'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider   attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
          {children}
        </ThemeProvider>

      </body>
    </html>
  )
}

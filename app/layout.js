
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'MatidiTelli',
  description: 'Fullstack developer',
}

const poppins = Poppins({ subsets: ['latin'], weight:['300','700']})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      
     {children}
      
        </body>
    </html>
  )
}

import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  variable: ['--font-raleway'],
  weight: ['400', '700'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} h-screen bg-dark-blue bg-mobile bg-cover bg-center bg-no-repeat font-raleway md:bg-desktop md:bg-bottom xl:bg-contain`}
      >
        {children}
      </body>
    </html>
  )
}

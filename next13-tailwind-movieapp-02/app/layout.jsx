import './globals.css'
import Link from 'next/link'
import Head from 'next/head'
import { Montserrat, Asul } from "next/font/google"

const montserrat = Montserrat({
  weight: ["400"],
 //subsets: ['latin']
 variable: ['--font-montserrat']
});
const asul = Asul({
  weight: ['400'],
  variable: '--font-asul'
})

export const metadata = {
  title: 'Next 13',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
      <title>Next 13 Tailwind-Movie</title>
      <meta name="description" content="Next 13 Project-02"></meta>

      </head>
      
       <body className= {`${montserrat.variable} font-montserrat  bg-zinc-900`} > {/* className= {`${montserrat.className}`} */}
          <nav className="nav flex pt-1">
                <Link href="/about" className="pl-7 pr-7 "> About </Link>
             
                <Link href="/"> Home </Link>
          </nav>
          <br></br>
          {children}
        </body>
   
    </html>
  )
}

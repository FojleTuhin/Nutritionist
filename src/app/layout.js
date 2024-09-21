import "./globals.css";
import { Urbanist } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})


export const metadata = {
  title: "Nutritionist",
  description: "Created by Fojle Tuhin",
};





export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={urbanist.className}>

        <main className="max-w-[1440px] mx-auto  bg-red-300">
          {children}
        </main>

      </body>
    </html>
  );
}

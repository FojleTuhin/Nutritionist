import "./globals.css";
import { Urbanist } from 'next/font/google'
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
    <html lang="en" data-theme="light">
      <head>
      <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={urbanist.className}>

        <main className="max-w-[1450px] mx-auto bg-[#FAFDF2]">
          <Navbar />
          {children}
          <Footer />
        </main>

      </body>
    </html>
  );
}

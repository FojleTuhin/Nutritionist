import "./globals.css";
import { Urbanist } from 'next/font/google'
import Navbar from "@/components/shared/Navbar";

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
      <body className={urbanist.className}>

        <main className="max-w-[1450px] mx-auto bg-[#FAFDF2]">
          <Navbar />
          {children}
          {/* <Footer /> */}
        </main>

      </body>
    </html>
  );
}

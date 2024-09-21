// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Nutritionist",
  description: "Created by Fojle Tuhin",
};


import { Urbanist } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={urbanist.className}>

        {children}

      </body>
    </html>
  );
}

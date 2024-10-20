import localFont from "next/font/local";
import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const opensans = Open_Sans({subsets:["latin"]});
const fugaz = Fugaz_One({subsets:["latin"],weight:['400']});

export const metadata = {
  title: "15MinNews",
  description: "A simple, fast, and secure web framework for Node.js",
}


export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-6 flex justify-between bg-white-50 shadow-sm ">
      <h1 className={`text-lg sm:text-xl font-bold text-blue-600 ${fugaz.className}`}>
        15MinNews
      </h1>
      <div className="flex items-center justify-between">
        <span className="text-sm sm:text-base text-gray-700 font-medium">
          Pavan Naik
        </span>
      </div>
    </header>
  );
  

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center ">
      <p className={'text-blue-500 '+fugaz.className}>Created with 💛</p>
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={'w-full mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}

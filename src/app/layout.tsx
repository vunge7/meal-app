import type { Metadata } from "next";
import {Nunito} from "next/font/google";


import "./globals.css";
import { Header } from "../components/header/Header";

const nunito = Nunito({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programção gratuito",
  description: "Os melhores cursos de programção gratuito",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={nunito.className}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        </body>
    </html>
  );
}

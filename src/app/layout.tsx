import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Image from "next/image";


import logo from '@/public/images/logo.png'


import "./globals.css";
import { Header } from "../components/shared/header/Header";
import { Content } from "../components/shared/content/Content"
import { log } from "console";

const nunito = Nunito({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Muse",
  description: "A melhor refeição do país encontre aqui.",
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

        <section className="flex justify-center">
          <Image src={logo} width={200} height={200} alt="logo" />
        </section>
        <Header />
        <Content className="w-full">{children}</Content>
      </body>
    </html>
  );
}

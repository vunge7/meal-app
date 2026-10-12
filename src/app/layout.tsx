import type { Metadata } from "next";
import { Nunito } from "next/font/google";


import "./globals.css";
import { Header } from "../components/shared/header/Header";
import { Content } from "../components/shared/content/Content"
import { Footer } from "../components/shared/footer/Footer";

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
        <Header />
        <Content className="w-full">{children}</Content>
        <Footer/>
      </body>
    </html>
  );
}

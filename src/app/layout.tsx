import type { Metadata } from "next";
import { Nunito } from "next/font/google";


import "./globals.css";
import { Header } from "../components/shared/header/Header";
import { Content } from "../components/shared/content/Content"

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
        <div className="flex justify-center mb-2">
          imagem
        </div>
        <Header />
        <Content className="w-full">{children}</Content>
      </body>
    </html>
  );
}

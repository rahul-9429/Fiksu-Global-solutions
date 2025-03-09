"use client";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head > 
          <title>Fiksu Global Solution</title>
        </head>
        <body>
          <SmoothScroll>
            <Header />
            {children} 
            <Footer />
         </SmoothScroll>
        </body>
      </html>
    </>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
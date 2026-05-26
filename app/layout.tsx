import type { Metadata } from "next";
import { Trykker } from "next/font/google";
import "./globals.css";
import { Navigation } from "./_components/navigation";
import Link from "next/link";

const trykker = Trykker({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Richard Sweeney",
  description: "Music, Web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${trykker.className} h-full antialiased bg-gray-950 text-white`}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full">
          <div className="max-w-7xl py-8 px-4 mx-auto">
            <Link href="/" className="text-4xl lg:text-7xl transition-all">
              Richard Sweeney
            </Link>
            <Navigation />
          </div>
        </header>
        <main className="flex flex-1 w-full">
          <div className="max-w-7xl flex flex-1 pt-8 pb-32 px-4 w-full mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

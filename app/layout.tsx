import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const pixelfiySans = Playfair_Display({
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aswin",
  description: "Mokuhyō wa ushinau na yo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pixelfiySans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableColorScheme>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

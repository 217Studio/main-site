import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "217 Studio | Game & Software Development | Demo",
  description:
    "217 Studio - Nhóm phát triển game và phần mềm sáng tạo. Chúng tôi tạo ra những sản phẩm game và phần mềm chất lượng, đột phá.",
  keywords: ["217 Studio", "game development", "software development", "indie studio", "Vietnam"],
  authors: [{ name: "217 Studio" }],
  openGraph: {
    title: "217 Studio | Game & Software Development",
    description: "Crafting Games & Software That Matter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

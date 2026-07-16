import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Update to the live URL after the first Vercel deployment
  metadataBase: new URL("https://vantum-demo.vercel.app"),
  title: "Vantum Robotics — Autonomy for the Real World",
  description:
    "Humanoid, industrial and aerial robotic systems with perception, planning and fleet operations in one platform. Portfolio demonstration website.",
  openGraph: {
    title: "Vantum Robotics — Autonomy for the Real World",
    description:
      "Humanoid, industrial and aerial robotic systems — one autonomy platform.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

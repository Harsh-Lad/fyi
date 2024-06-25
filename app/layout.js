import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FYI - Finding You & I",
  description: "FYI: Finding You and I is a mental health awareness platform dedicated to raising awareness, reducing stigma, and providing accessible resources. We offer a comprehensive library of articles, expert insights, and community forums where individuals can connect, share experiences, and support each other on their mental health journeys. Our mission is to foster understanding and create a supportive environment for everyone seeking mental well-being.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

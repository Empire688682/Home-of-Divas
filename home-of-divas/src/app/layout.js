import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import styles from './globals.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home of Divas",
  description: "This is officail Home of Divas Website, we are number one whent it comes to fashion and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

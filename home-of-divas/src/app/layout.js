import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";
import styles from './globals.css';
import { GlobalProvider } from "@/Component/Context";

export const metadata = {
  title: "Home of Divas",
  description: "This is officail Home of Divas Website, we are number one whent it comes to fashion and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalProvider>
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
      </GlobalProvider>
    </html>
  );
}

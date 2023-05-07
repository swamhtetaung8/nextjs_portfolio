import Navbar from "@/components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Swam Htet Aung",
  description: "Welcome, this is my portfolio website.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} md:px-40 bg-[#f1f1f1]`}>
        <main className=" bg-white shadow  md:px-20 px-5 md:pt-5 min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

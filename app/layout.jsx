import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Swam Htet Aung",
  description: "Welcome, this is my portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} xl:px-56`}>
        <Providers>
          <main className="relative z-10 min-h-screen px-5 md:px-20 md:pt-5">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
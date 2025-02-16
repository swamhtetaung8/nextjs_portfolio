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
      <body className={`${poppins.className}`}>
        <Providers>
          <main className="relative z-10 min-h-screen px-5 md:px-20 md:pt-5">
            {/* Light mode background */}
            <div className="dark:hidden">
              <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
              </div>
            </div>

            {/* Dark mode background */}
            <div className="dark:block hidden bg-black">
              <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            <div className="xl:px-56">
              <Navbar />
              {children}
              <Footer />
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GlobalContext from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Dahiir ",
  description:
    "Oussmam Dahir (Dahiir) is a Creative Developer and UX/Ui Designer ",
  icons: {
    icon: "/fav.svg",
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <GlobalContext>
          <Navbar />
          <main className="xs:px-12 px-4 py-10 overflow-hidden min-h-screen">
            {children}
          </main>
          <Footer />
        </GlobalContext>
        <SpeedInsights />
      </body>
    </html>
  );
}

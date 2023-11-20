import type { Metadata } from "next";
import "./globals.css";
import GlobalContext from "./context/GlobalContext";
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Dahiir ",
  description:
    "Oussmam Dahir (Dahiir) is a Creative Developer and UX/Ui Designer ",
  icons: {
    icon: "fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalContext>
          <Navbar />
          <main className="px-12 py-5">{children}</main>
        </GlobalContext>
      </body>
    </html>
  );
}

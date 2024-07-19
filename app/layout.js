import { Acme } from "next/font/google";
import "./globals.css";

const acme = Acme({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dots Agency",
  description: "Dots Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={acme.className}>{children}</body>
    </html>
  );
}

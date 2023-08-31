import "./globals.css";
import { Inter } from "next/font/google";
import WrapperProviders from "@/components/layout/WrapperProviders";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Zestawienie Zagranica",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <WrapperProviders>{children}</WrapperProviders>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;

import "../globals.css";
import { Inter } from "next/font/google";
import WrapperProviders from "@/components/layout/WrapperProviders";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Konfiguracja",
};

const RootLayoutConfigPage = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-clip`}>
        <WrapperProviders>{children}</WrapperProviders>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayoutConfigPage;

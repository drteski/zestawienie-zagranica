import "../globals.css";
import { Inter } from "next/font/google";
import WrapperProviders from "@/components/layout/WrapperProviders";
import { Toaster } from "@/components/ui/toaster";
import Wrapper from "@/components/layout/Wrapper";
import Navbar from "@/components/index/Navbar";
import Summary from "@/components/reports/Summary";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Zestawienie",
};

const RootLayoutPanelPage = ({ children }) => {
  return (
    <html lang="pl">
      <body className={`${inter.className}`}>
        <WrapperProviders>
          <Wrapper>
            <Navbar />
            <div className="relative h-full w-full bg-muted rounded-md overflow-clip">
              {children}
              <Summary />
            </div>
          </Wrapper>
        </WrapperProviders>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayoutPanelPage;

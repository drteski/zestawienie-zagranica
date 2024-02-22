import "../globals.css";
import { Inter } from "next/font/google";
import WrapperProviders from "@/components/layout/WrapperProviders";
import { Toaster } from "@/components/ui/toaster";
import Wrapper from "@/components/layout/Wrapper";

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
            <div className="relative h-full w-full grid grid-rows-[96px_calc(100dvh_-_32px_-_96px_-_var(--summary-height))_auto] bg-muted rounded-md overflow-clip">
              {children}
            </div>
          </Wrapper>
        </WrapperProviders>
        <Toaster />
      </body>
    </html>
  );
};

export default RootLayoutPanelPage;

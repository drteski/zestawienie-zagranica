"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { StoreProvider } from "@/app/Redux/provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
      retryDelay: 1000,
    },
  },
});
const WrapperProviders = ({ children }) => {
  return (
    <SessionProvider>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StoreProvider>
    </SessionProvider>
  );
};

export default WrapperProviders;

import "@/styles/globals.css";
import { queryConfig, toastConfig } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(queryConfig));

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster toastOptions={toastConfig} />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

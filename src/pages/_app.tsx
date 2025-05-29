import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Toaster />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

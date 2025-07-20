import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../src/components/ThemeProvider";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

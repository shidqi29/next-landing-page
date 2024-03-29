import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import { Footer, Navbar } from "@/components/layouts";
import "@/styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main
        className={`mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20 ${roboto.className}`}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

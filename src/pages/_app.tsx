import { Navbar } from "@/components/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={`mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 ${roboto.className}`}
      >
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}
